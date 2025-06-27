# Elite Renovations - Home Renovation Services Platform

## Overview

This is a full-stack web application for Elite Renovations, a professional home renovation company serving the GTA and Blue Mountain areas. The application is built as a marketing website with contact form functionality, featuring a modern React frontend with shadcn/ui components and an Express.js backend with PostgreSQL database integration using Drizzle ORM.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared code:

- **Frontend**: React SPA built with Vite, using TypeScript and Tailwind CSS
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM for schema management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling, esbuild for backend compilation

## Key Components

### Frontend Architecture
- **React Router**: Using wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Styling**: Tailwind CSS with custom construction-themed color palette
- **Forms**: React Hook Form with Zod validation
- **TypeScript**: Full type safety across the application

### Backend Architecture
- **Express.js**: RESTful API server with middleware for logging and error handling
- **Database Layer**: Drizzle ORM for type-safe database operations
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **API Endpoints**: Contact form submission and retrieval endpoints
- **Development Setup**: Vite integration for hot reloading in development

### Database Schema
- **Contact Submissions**: Stores customer inquiries with fields for personal info, service type, and project details
- **Users**: Basic user table (for future authentication features)
- **Migrations**: Drizzle Kit for database schema migrations

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form validation using Zod schema
   - Data sent to `/api/contact` endpoint
   - Server validates and stores in database
   - Success/error response sent back to client
   - Toast notification displayed to user

2. **Admin Data Access**:
   - `/api/contact-submissions` endpoint for retrieving all submissions
   - Currently uses in-memory storage, easily replaceable with database implementation

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: PostgreSQL client for Neon database
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation

### UI/UX Dependencies
- **@radix-ui/***: Headless UI components for accessibility
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Utility for managing component variants
- **lucide-react**: Icon library

### Development Dependencies
- **vite**: Frontend build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development
- Frontend: Vite dev server with HMR
- Backend: tsx for TypeScript execution with auto-restart
- Database: PostgreSQL connection via environment variable

### Production Build
1. Frontend builds to `dist/public` using Vite
2. Backend compiles to `dist/index.js` using esbuild
3. Static files served by Express in production
4. Single process serves both API and static assets

### Environment Configuration
- `NODE_ENV`: development/production mode switching
- `DATABASE_URL`: PostgreSQL connection string (required)
- `REPL_ID`: Replit-specific configuration for development tools

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```