# GamePulse

GamePulse is a full-stack sports management platform designed to help players find courts, join games, track their progress, and connect with other sports enthusiasts. The project is built using modern technologies including React/Next.js for the frontend, ASP.NET Core for the backend API, and PostgreSQL for data storage.

---

## Summary

1. [Project Overview](#project-overview)
1. [Folder Structure](#folder-structure)
   1. [Frontend: game-pulse.UI](#frontend-game-pulseui)
   1. [Backend API: game-pulse.API](#backend-api-game-pulseapi)
   1. [Data Layer: game-pulse.Data](#data-layer-game-pulsedata)
   1. [Database: game-pulse.DB](#database-game-pulsedb)
1. [Configuration Files](#configuration-files)
1. [How to Build and Run](#how-to-build-and-run)
1. [API Endpoints](#api-endpoints)

---

<br />

## Project Overview

GamePulse enables users to:

- Discover public sports courts in their city.
- Join or create games and track participation.
- View leaderboards and player statistics.
- Manage their profile, favorite sports, and achievements.
- Authenticate securely using providers like Google.

The stack includes:

- **Frontend:** React/Next.js, Tailwind CSS, Material Tailwind.
- **Backend:** ASP.NET Core Web API.
- **Database:** PostgreSQL (with EF Core migrations).
- **Authentication:** Firebase (Google, etc).

<br />

## Folder Structure

```
├── .gitignore
├── README.md
├── .github/
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── workflows/
├── game-pulse.API/
│   ├── Controllers/
│   ├── Interfaces/
│   ├── Services/
│   ├── Properties/
│   ├── wwwroot/
│   ├── appsettings.json
│   ├── appsettings.Local.json
│   ├── Dockerfile
│   ├── game-pulse.API.csproj
│   ├── Program.cs
│   └── ...
├── game-pulse.Data/
│   ├── Contexts/
│   ├── Migrations/
│   ├── Models/
│   ├── game-pulse.Data.csproj
│   └── ...
├── game-pulse.DB/
│   ├── database-structure.dbml
│   ├── schema.sql
│   └── README.md
├── game-pulse.UI/
│   ├── src/
│   ├── public/
│   ├── tailwind.config.ts
│   ├── README.md
│   └── ...
```

<br />

### Frontend: game-pulse.UI

- **Location:** [`game-pulse.UI`](game-pulse.UI)
- **Tech:** React, Next.js, Tailwind CSS, Material Tailwind
- **Features:**
  - User authentication and profile management
  - Court discovery and game registration
  - Leaderboards and player stats
  - Responsive UI with animations
- **Key Files:**
  - [`src/app/page.tsx`](game-pulse.UI/src/app/page.tsx): Home page
  - [`src/app/shared/header.tsx`](game-pulse.UI/src/app/shared/header.tsx): Navigation header
  - [`src/app/shared/auth/auth.tsx`](game-pulse.UI/src/app/shared/auth/auth.tsx): Authentication logic
  - [`src/app/services/apiClient.ts`](game-pulse.UI/src/app/services/apiClient.ts): API client for backend communication
  - [`tailwind.config.ts`](game-pulse.UI/tailwind.config.ts): Tailwind CSS configuration

<br />

### Backend API: game-pulse.API

- **Location:** [`game-pulse.API`](game-pulse.API)
- **Tech:** ASP.NET Core Web API
- **Features:**
  - RESTful endpoints for users, sports, courts, games
  - Swagger UI for API documentation ([`wwwroot/SwaggerUI/SwaggerDark.css`](game-pulse.API/wwwroot/SwaggerUI/SwaggerDark.css))
  - CORS configuration for frontend integration
  - Docker support for containerized deployment ([`Dockerfile`](game-pulse.API/Dockerfile))
- **Key Files:**
  - [`Program.cs`](game-pulse.API/Program.cs): API startup and configuration
  - [`Controllers/`](game-pulse.API/Controllers): API controllers
  - [`Interfaces/`](game-pulse.API/Interfaces): DTOs and service interfaces
  - [`Services/`](game-pulse.API/Services): Business logic and data access
  - [`appsettings.json`](game-pulse.API/appsettings.json): Configuration

<br />

### Data Layer: game-pulse.Data

- **Location:** [`game-pulse.Data`](game-pulse.Data)
- **Tech:** Entity Framework Core
- **Features:**
  - Database context and models
  - Migrations for schema updates
- **Key Files:**
  - [`Contexts/GamePulseDbContext.cs`](game-pulse.Data/Contexts/GamePulseDbContext.cs): Main EF Core context
  - [`Models/UserAccount.cs`](game-pulse.Data/Models/UserAccount.cs): User model
  - [`Migrations/`](game-pulse.Data/Migrations): Migration history

<br />

### Database: game-pulse.DB

- **Location:** [`game-pulse.DB`](game-pulse.DB)
- **Tech:** PostgreSQL
- **Features:**
  - Database schema and structure
  - DBML diagram for visualization
- **Key Files:**
  - [`database-structure.dbml`](game-pulse.DB/database-structure.dbml): Conceptual diagram
  - [`schema.sql`](game-pulse.DB/schema.sql): SQL schema

<br />

## Configuration Files

- **API:** [`game-pulse.API/appsettings.json`](game-pulse.API/appsettings.json), [`appsettings.Local.json`](game-pulse.API/appsettings.Local.json)
- **Frontend:** [`game-pulse.UI/tailwind.config.ts`](game-pulse.UI/tailwind.config.ts)
- **Docker:** [`game-pulse.API/Dockerfile`](game-pulse.API/Dockerfile)
- **GitHub Actions:** [`.github/workflows/`](.github/workflows/)

<br />

## How to Build and Run

### Backend API

```sh
cd game-pulse.API
dotnet build
dotnet run
```

Or with Docker:

```sh
docker build -t gamepulse-api .
docker run -p 5000:80 gamepulse-api
```

<br />

### Frontend

```sh
cd game-pulse.UI
npm install
npm run dev
```

<br />

## API Endpoints

- **User:** `/User/GetUser/{id}`, `/User/CreateUser`
- **Sports:** `/Sports/GetSports`
- **Courts:** `/Courts/GetCourts`
- **Games:** `/Games/GetGames`, `/Games/SubscribeToGame`
- **Swagger UI:** `/swagger`

See [`Controllers/`](game-pulse.API/Controllers) for implementation details.

---
