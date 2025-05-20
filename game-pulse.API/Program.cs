using System.Net;
using Microsoft.AspNetCore.Diagnostics;
using game_pulse.Data.Contexts;
using game_pulse.Interfaces;
using game_pulse.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy => policy.WithOrigins(
            "http://localhost:3000",
            "https://gamepulse-omega.vercel.app"
            )
                    .AllowAnyHeader()
                    .AllowAnyMethod());
});

// Add dbContext
builder.Services.AddDbContext<GamePulseDbContext>(options => 
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add services
builder.Services.AddScoped<ISportsService, SportsService>();
builder.Services.AddScoped<IUserService, UserService>();

var app = builder.Build();

// Global Error Middleware
app.UseExceptionHandler(errorApp =>
{
    errorApp.Run(async context =>
    {
        context.Response.ContentType = "application/json";
        context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;

        var exceptionHandlerPathFeature = context.Features.Get<IExceptionHandlerPathFeature>();
        if (exceptionHandlerPathFeature?.Error != null)
        {
            // LOG THE ERROR ON THE CONSOLE
            app.Logger.LogError(exceptionHandlerPathFeature.Error, exceptionHandlerPathFeature.Error.Message);

            var errorResponse = new
            {
                Path = context.Request.Path.Value,
                context.Request.Method,
                context.Response.StatusCode,
                Message = "Internal Server Error.",
                Details = exceptionHandlerPathFeature.Error.Message,
                TraceId = context.TraceIdentifier,
                exceptionHandlerPathFeature.Error.StackTrace
            };

            await context.Response.WriteAsJsonAsync(errorResponse);
        }
    });
});

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.InjectStylesheet("/SwaggerUI/SwaggerDark.css");
    });
    app.UseStaticFiles();
}

app.UseCors("AllowFrontend");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
