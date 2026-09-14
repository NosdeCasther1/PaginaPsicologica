# Selah — Psicología Clínica

Sitio web de Selah, consulta de psicología clínica que atiende **terapia online en toda Guatemala
y presencial en Huehuetenango**. Además de las páginas informativas, el sitio resuelve el paso que
de verdad importa para la consulta: que una persona pase de leer a tener una cita agendada.

Construido con **Next.js 16** (App Router), **React 19**, **TypeScript** y **Tailwind CSS 4**.

## Qué incluye

| Área | Detalle |
|---|---|
| **Contenido** | Servicios por especialidad, artículos, recursos, charlas y las páginas legales (términos, privacidad, confidencialidad) |
| **Agenda** | Disponibilidad real consultada contra Google Calendar y redirección al calendario público de citas |
| **Luz** | Asistente conversacional sobre Gemini que responde dudas frecuentes y ayuda a agendar |
| **WhatsApp** | Webhook de WhatsApp Business Cloud API que reutiliza la misma lógica de Luz |
| **Correo** | Aviso de solicitudes de cita por SMTP |
| **SEO** | Metadatos, Open Graph, `sitemap.ts` y `robots.ts`, más un script de auditoría |
| **Imágenes** | Optimización a WebP en cada build con `sharp` |

### Las reglas de Luz

Luz está acotada a propósito, porque es un contexto de salud mental:

- **No diagnostica** ni sugiere tratamientos.
- **No inventa horarios**: cuando no puede confirmar disponibilidad real, redirige al calendario
  público en lugar de improvisar una hora.
- Consulta Google Calendar cuando está configurado.

El chat web (`src/lib/luz.ts`) y el webhook de WhatsApp comparten esa misma lógica, de modo que las
respuestas no pueden divergir entre un canal y otro.

## Puesta en marcha

```bash
npm install
cp .env.example .env.local   # si no existe, crea .env.local con las variables de abajo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

### Scripts

| Script | Para qué |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Optimiza imágenes y compila para producción |
| `npm start` | Sirve la compilación de producción |
| `npm run lint` | ESLint |
| `npm run optimize-images` | Convierte las imágenes a WebP |
| `npm run audit:seo` | Auditoría de SEO sobre el sitio |

## Variables de entorno

Ninguna credencial va en el repositorio: todas se configuran en Vercel (Production y Preview) o en
`.env.local` para desarrollo.

### Sitio

| Variable | Para qué |
|---|---|
| `NEXT_PUBLIC_BASE_URL` | URL canónica. Alimenta sitemap, robots, Open Graph y JSON-LD |
| `NEXT_PUBLIC_GOOGLE_APPOINTMENT_URL` | Calendario público de citas de Google |
| `CONTACT_EMAIL` | Destino de las solicitudes de cita |

### Google Calendar

| Variable | Para qué |
|---|---|
| `GOOGLE_CALENDAR_ID` | Calendario contra el que se consulta disponibilidad |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Cuenta de servicio con acceso al calendario |
| `GOOGLE_SERVICE_ACCOUNT_KEY` | Llave privada de esa cuenta (o `GOOGLE_SERVICE_ACCOUNT_KEY_FILE` en local) |
| `GOOGLE_CALENDAR_TIME_ZONE` | Zona horaria. Por defecto `America/Guatemala` |
| `GOOGLE_CALENDAR_UTC_OFFSET` | Desfase UTC de respaldo |
| `APPOINTMENT_SLOT_MINUTES` | Duración de cada espacio |
| `APPOINTMENT_WORKDAY_START` / `APPOINTMENT_WORKDAY_END` | Horario de atención |

### Luz

| Variable | Para qué |
|---|---|
| `GOOGLE_GENERATIVE_AI_MODEL` | Modelo de Gemini que responde |

### Correo

`SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`.

### WhatsApp

Ver la sección siguiente.

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
