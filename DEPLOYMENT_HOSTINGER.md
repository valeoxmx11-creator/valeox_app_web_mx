# VALEOX Deployment Notes (Hostinger Node.js Web App)

## Runtime
- Node.js 20+
- PostgreSQL database reachable from Hostinger runtime

## Environment Variables
Use `.env.example` as baseline and configure all values in Hostinger panel.

## Build and Start
```bash
npm install
npm run build
npm run start
```

## Production Checklist
1. Set `PAYLOAD_SECRET` to a high-entropy secret.
2. Set `DATABASE_URI` to managed PostgreSQL instance.
3. Set `NEXT_PUBLIC_APP_URL` and `PAYLOAD_PUBLIC_SERVER_URL` to canonical domain.
4. Set `CORS_ORIGIN` and `CSRF_TRUSTED_ORIGINS` with production domain.
5. Configure OAuth credentials for Google and Facebook.
6. Ensure initial admin user is created in Payload.

## Notes
- Public routes are open.
- High-value CTA flows should route through auth + discovery before WhatsApp redirect.
