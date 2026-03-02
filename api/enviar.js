const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Solo permitimos peticiones POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  // Extraemos el tipo también para personalizar el mensaje
  const { email, nombre, tipo } = req.body;

  // Configuración de Zoho usando las variables de entorno de Vercel
  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER, // managger@expocromatica.com
      pass: process.env.EMAIL_PASS, // Los 16 caracteres de la App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"Expocromática" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `¡Bienvenido a Cromática 2.0, ${nombre}!`,
      html: `
        <div style="font-family: 'Poppins', Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(to right, #FF8A00, #F48FB1); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">¡Registro Exitoso!</h1>
          </div>
          <div style="padding: 30px; color: #333; line-height: 1.6;">
            <h2 style="color: #FF8A00;">Hola, ${nombre}</h2>
            <p>Gracias por registrarte en <strong>CROMÁTICA 2.0</strong> como <strong>${tipo.toUpperCase()}</strong>.</p>
            <p>Estamos muy emocionados de contar con tu participación. Tu información ha sido guardada correctamente en nuestra base de datos.</p>
            
            <div style="background: #FFF8F0; border-left: 4px solid #FF8A00; padding: 15px; margin: 20px 0;">
              <p style="margin: 0; font-weight: bold;">Próximos pasos:</p>
              <ul style="margin: 10px 0 0 0; padding-left: 20px;">
                <li>Nuestro equipo revisará tu perfil.</li>
                <li>Recibirás un segundo correo con los detalles para el pago de tu participación.</li>
                <li>¡Prepárate para el evento!</li>
              </ul>
            </div>
            
            <p>Si tienes alguna duda, puedes responder directamente a este correo.</p>
            <br>
            <p style="margin-bottom: 0;">Saludos cordiales,</p>
            <p style="margin-top: 5px; font-weight: bold; color: #F48FB1;">El equipo de Expocromática</p>
          </div>
          <div style="background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #999;">
            © 2026 Expocromática. Todos los derechos reservados.
          </div>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error("Error de Nodemailer:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}