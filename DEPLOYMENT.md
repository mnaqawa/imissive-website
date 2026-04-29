# iMissive Website - Deployment Guide

This document provides instructions for self-hosting the iMissive website.

## Prerequisites

- Docker and Docker Compose installed
- SSL certificate (for HTTPS)
- Domain name pointed to your server
- Node.js 20+ (for local development)

## Quick Start with Docker

### 1. Clone and Configure

```bash
# Clone the repository
git clone <repository-url>
cd imissive-website

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your configuration
nano .env.local
```

### 2. SSL Certificate Setup

Place your SSL certificates in the `nginx/ssl/` directory:

```bash
mkdir -p nginx/ssl
# Copy your certificates
cp /path/to/fullchain.pem nginx/ssl/
cp /path/to/privkey.pem nginx/ssl/
```

For Let's Encrypt, uncomment the certbot service in `docker-compose.yml`.

### 3. Build and Run

```bash
# Build and start containers
docker-compose up -d --build

# View logs
docker-compose logs -f

# Stop containers
docker-compose down
```

The website will be available at `https://your-domain.com`

## Manual Deployment (Without Docker)

### 1. Install Dependencies

```bash
# Install pnpm if not already installed
npm install -g pnpm

# Install project dependencies
pnpm install
```

### 2. Build the Application

```bash
# Build for production
pnpm build
```

### 3. Run in Production

```bash
# Start the production server
pnpm start
```

The application runs on port 3000 by default.

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `SMTP_HOST` | SMTP server hostname | No |
| `SMTP_PORT` | SMTP server port (default: 587) | No |
| `SMTP_USER` | SMTP username | No |
| `SMTP_PASS` | SMTP password | No |
| `CONTACT_EMAIL` | Email for contact form submissions | No |
| `NEXT_PUBLIC_SITE_URL` | Base URL of the website | Yes |

## Architecture

```
┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │
│     Nginx       │────▶│    Next.js      │
│  (Port 80/443)  │     │   (Port 3000)   │
│                 │     │                 │
└─────────────────┘     └─────────────────┘
```

## Health Checks

- **Nginx**: `GET /health` returns "healthy"
- **Application**: Docker healthcheck on port 3000

## Security Considerations

1. **SSL/TLS**: Always use HTTPS in production
2. **Headers**: Security headers are configured in nginx.conf
3. **Rate Limiting**: API endpoints are rate-limited
4. **Non-root User**: Docker container runs as non-root user

## Updating the Website

```bash
# Pull latest changes
git pull

# Rebuild and restart
docker-compose up -d --build
```

## Troubleshooting

### Container not starting
```bash
docker-compose logs app
```

### Nginx errors
```bash
docker-compose logs nginx
docker exec imissive-nginx nginx -t
```

### SSL certificate issues
Ensure certificates are readable and in the correct format:
```bash
openssl x509 -in nginx/ssl/fullchain.pem -text -noout
```

## Support

For technical support, contact: support@imissive.com
