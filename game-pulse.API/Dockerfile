# build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY . .

# debug
RUN pwd
RUN ls -la
RUN ls -la game-pulse.API
RUN ls -la game-pulse.Data

RUN dotnet publish ./game-pulse.API/game-pulse.API.csproj -c Release -o /app

# runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "game-pulse.API.dll"]