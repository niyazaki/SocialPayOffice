require('dotenv').config();

const express = require('express');
const path = require('path');
const compression = require('compression');
const helmet = require('helmet');
const nodemailer = require('nodemailer');
const rateLimit = require('express-rate-limit');

const app = express();

// Port configuration - Infomaniak will set the PORT environment variable
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
  contentSecurityPolicy: false, // Disable for inline scripts if needed
}));

// Compression middleware for better performance
app.use(compression());

// Body parser middleware for JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate limiting for contact form (max 5 requests per 15 minutes per IP)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: 'Trop de demandes depuis cette adresse IP, veuillez réessayer plus tard.'
});

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT),
  secure: process.env.SMTP_SECURE === 'true', // use SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Serve static files from the root directory
// Disable cache in development, enable in production
const isProduction = process.env.NODE_ENV === 'production';
app.use(express.static(__dirname, {
  maxAge: isProduction ? '1d' : 0, // Cache 1 day in prod, no cache in dev
  etag: !isProduction,
  lastModified: !isProduction,
  setHeaders: (res, path) => {
    if (!isProduction) {
      res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Contact form endpoint with rate limiting and honeypot protection
app.post('/api/contact', contactLimiter, async (req, res) => {
  try {
    const { firstname, lastname, company, email, phone, employees, message, _gotcha } = req.body;

    // Honeypot field check (anti-spam)
    if (_gotcha) {
      console.log('🛡️ Spam attempt detected (honeypot triggered)');
      return res.status(400).json({
        success: false,
        message: 'Requête invalide'
      });
    }

    // Basic validation
    if (!firstname || !lastname || !company || !email || !phone || !employees || !message) {
      return res.status(400).json({
        success: false,
        message: 'Tous les champs sont requis'
      });
    }

    // Email validation (flexible but reasonable)
    const emailRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Adresse email invalide'
      });
    }

    // Phone validation (flexible - accepts European formats)
    // Accepts: +32 123 45 67 89, 0032 123456789, 0123456789, +33-1-23-45-67-89, etc.
    const phoneRegex = /^[\d\s\+\(\)\-\.]{8,20}$/;
    if (!phoneRegex.test(phone)) {
      return res.status(400).json({
        success: false,
        message: 'Numéro de téléphone invalide'
      });
    }

    const fullname = `${firstname} ${lastname}`;

    // Prepare email content
    const mailOptions = {
      from: `[Form] ${lastname} ${firstname} <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: 'Nouveau message via le formulaire de contact du site',
      html: `
        <!DOCTYPE html>
        <html lang="fr">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouveau contact - Social Pay Office</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background: linear-gradient(135deg, #f5f7fa 0%, #ffffff 50%, #e8eef7 100%); line-height: 1.6;">

          <!-- Email Container -->
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 60px 20px;">

                <!-- Main Content Card -->
                <table role="presentation" style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1); overflow: hidden;">

                  <!-- Header with Logo -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); padding: 48px 40px; text-align: center; position: relative;">
                      <!-- Logo -->
                      <div style="margin-bottom: 24px;">
                        <img src="https://spoffice.be/images/logo.svg" alt="Social Pay Office" style="width: 100px; height: auto; display: inline-block; filter: brightness(0) invert(1);" />
                      </div>
                      <h1 style="margin: 0; color: #ffffff; font-size: 32px; font-weight: 700; letter-spacing: -0.5px;">
                        Nouveau Contact
                      </h1>
                      <p style="margin: 12px 0 0 0; color: rgba(255, 255, 255, 0.8); font-size: 15px; font-weight: 400;">
                        Message reçu via le formulaire de contact
                      </p>
                    </td>
                  </tr>

                  <!-- Contact Information -->
                  <tr>
                    <td style="padding: 48px 40px;">

                      <!-- Contact Details Card -->
                      <div style="background-color: #f8f9fa; border-radius: 12px; padding: 32px; margin-bottom: 32px; border-left: 4px solid #1e293b; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                        <h2 style="margin: 0 0 24px 0; color: #1e293b; font-size: 20px; font-weight: 700;">
                          Informations du contact
                        </h2>

                        <table role="presentation" style="width: 100%; border-collapse: collapse;">
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top; width: 35%;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Prénom</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #1a1a1a; font-size: 15px; font-weight: 600;">${firstname}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Nom</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #1a1a1a; font-size: 15px; font-weight: 600;">${lastname}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Entreprise</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #1a1a1a; font-size: 15px; font-weight: 600;">${company}</span>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Email</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <a href="mailto:${email}" style="color: #1e293b; font-size: 15px; font-weight: 600; text-decoration: none; border-bottom: 2px solid #1e293b; transition: all 0.3s ease;">${email}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Téléphone</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <a href="tel:${phone}" style="color: #1a1a1a; font-size: 15px; font-weight: 600; text-decoration: none;">${phone}</a>
                            </td>
                          </tr>
                          <tr>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #475569; font-size: 15px; font-weight: 500;">Nb. d'employés</span>
                            </td>
                            <td style="padding: 10px 0; vertical-align: top;">
                              <span style="color: #1a1a1a; font-size: 15px; font-weight: 600;">${employees}</span>
                            </td>
                          </tr>
                        </table>
                      </div>

                      <!-- Message Card -->
                      <div style="background-color: #f8f9fa; border-radius: 12px; padding: 32px; border-left: 4px solid #334155; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);">
                        <h2 style="margin: 0 0 20px 0; color: #1e293b; font-size: 20px; font-weight: 700;">
                          Message
                        </h2>
                        <p style="margin: 0; color: #1a1a1a; font-size: 15px; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">${message}</p>
                      </div>

                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 32px 40px; text-align: center; border-top: 2px solid #e0e0e0;">
                      <p style="margin: 0 0 10px 0; color: #666666; font-size: 13px; line-height: 1.6;">
                        Ce message a été envoyé via le formulaire de contact de <strong style="color: #1e293b;">spoffice.be</strong>
                      </p>
                      <p style="margin: 0; color: #999999; font-size: 12px; opacity: 0.8;">
                        ${new Date().toLocaleString('fr-BE', {
                          timeZone: 'Europe/Brussels',
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </p>
                    </td>
                  </tr>

                </table>

              </td>
            </tr>
          </table>

        </body>
        </html>
      `,
      text: `
Nouveau message du formulaire de contact
==========================================

INFORMATIONS DU CONTACT
-----------------------
Prénom: ${firstname}
Nom: ${lastname}
Entreprise: ${company}
Email: ${email}
Téléphone: ${phone}
Nombre d'employés: ${employees}

MESSAGE
-------
${message}

==========================================
Ce message a été envoyé depuis le formulaire de contact de spoffice.be
Date: ${new Date().toLocaleString('fr-BE', {
  timeZone: 'Europe/Brussels',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email sent successfully from ${email}`);

    res.status(200).json({
      success: true,
      message: 'Message envoyé avec succès!'
    });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({
      success: false,
      message: 'Erreur lors de l\'envoi du message. Veuillez réessayer.'
    });
  }
});

// Catch-all route for SPA-like behavior (optional)
app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Social Pay Office server is running on port ${PORT}`);
  console.log(`🌐 Local: http://localhost:${PORT}`);
  console.log(`📁 Serving files from: ${__dirname}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('🛑 SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('✅ HTTP server closed');
  });
});
