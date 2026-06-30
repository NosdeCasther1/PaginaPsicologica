This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## WhatsApp Business Cloud API (Meta)

El proyecto incluye un webhook público en:

```text
https://<mi-dominio>/api/whatsapp/webhook
```

Este endpoint reutiliza la misma lógica de Luz que usa el chat web (`src/lib/luz.ts`), por lo que las reglas de negocio son las mismas: Luz no inventa horarios, no diagnostica, redirige al calendario público cuando no puede confirmar disponibilidad real y consulta Google Calendar cuando está configurado.

### Variables de entorno

Agrega estas variables en Vercel (Production y Preview si aplica):

```env
WHATSAPP_VERIFY_TOKEN=
WHATSAPP_APP_SECRET=
WHATSAPP_ACCESS_TOKEN=
WHATSAPP_PHONE_NUMBER_ID=
WHATSAPP_BUSINESS_NUMBER=+50251455816
```

Dónde se obtiene cada valor:

- `WHATSAPP_VERIFY_TOKEN`: lo defines tú. Debe ser el mismo valor que pegues en la configuración del webhook de Meta.
- `WHATSAPP_APP_SECRET`: Meta for Developers > App Dashboard > App settings > Basic > App secret.
- `WHATSAPP_ACCESS_TOKEN`: token permanente generado con un System User en Meta Business Manager, o token temporal en WhatsApp > API Setup para pruebas.
- `WHATSAPP_PHONE_NUMBER_ID`: Meta for Developers > WhatsApp > API Setup > Phone number ID.
- `WHATSAPP_BUSINESS_NUMBER`: número del negocio en formato internacional sin espacios. Para este proyecto: `+50251455816`.

### Pasos en Meta for Developers

1. Entra a [Meta for Developers](https://developers.facebook.com/) y crea una app tipo **Business**.
2. Agrega el producto **WhatsApp**.
3. En **WhatsApp > API Setup**, conecta o selecciona el número `+502 51455816`.
4. Copia el **Phone number ID** y guárdalo como `WHATSAPP_PHONE_NUMBER_ID`.
5. Para producción, crea un **System User** en Meta Business Manager y genera un token permanente con permisos de WhatsApp. Guárdalo como `WHATSAPP_ACCESS_TOKEN`.
6. En **App settings > Basic**, copia el **App secret** y guárdalo como `WHATSAPP_APP_SECRET`.
7. En **WhatsApp > Configuration**, configura el webhook:
   - Callback URL: `https://<mi-dominio>/api/whatsapp/webhook`
   - Verify token: el valor que pusiste en `WHATSAPP_VERIFY_TOKEN`
8. Suscribe el webhook al evento **messages**.
9. Haz redeploy en Vercel después de agregar las variables.

### Seguridad del webhook

- `GET /api/whatsapp/webhook` verifica el token de Meta y devuelve el `hub.challenge`.
- `POST /api/whatsapp/webhook` valida `x-hub-signature-256` con HMAC SHA256 usando `WHATSAPP_APP_SECRET`.
- Eventos que no sean mensajes de texto (por ejemplo `statuses` o reacciones) se ignoran con status 200.
- El endpoint siempre responde 200 a Meta después de recibir un evento válido, incluso si falla el envío de respuesta, para evitar reintentos y desactivaciones del webhook.
- `robots.ts` bloquea `/api/`, así que el webhook no queda indexable por buscadores.
