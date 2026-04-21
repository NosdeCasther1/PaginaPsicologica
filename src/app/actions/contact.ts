'use server';

import nodemailer from 'nodemailer';

export type ContactState = {
    success?: string;
    error?: string;
};

export async function sendContactEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const service = formData.get('service') as string;
    const message = formData.get('message') as string;

    // Basic validation
    if (!name || !email || !message) {
        return { error: 'Por favor, completa todos los campos requeridos.' };
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT) || 587,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        const mailOptions = {
            from: `"Web Contact" <${process.env.SMTP_USER}>`,
            to: process.env.SMTP_USER, // Enviar al mismo correo configurado o uno específico
            replyTo: email,
            subject: `Nuevo mensaje de contacto: ${service || 'General'}`,
            text: `
                Nombre: ${name}
                Email: ${email}
                Teléfono: ${phone || 'No proporcionado'}
                Servicio: ${service || 'No especificado'}
                Mensaje: ${message}
            `,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
                    <h2 style="color: #2563eb;">Nuevo mensaje de contacto</h2>
                    <p><strong>Nombre:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                    <p><strong>Servicio:</strong> ${service || 'No especificado'}</p>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    <p><strong>Mensaje:</strong></p>
                    <p style="white-space: pre-wrap;">${message}</p>
                </div>
            `,
        };

        await transporter.sendMail(mailOptions);

        return { success: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' };
    }
}
