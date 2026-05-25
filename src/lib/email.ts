import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string, name: string) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: 'Welcome to SaaS Dashboard!',
    html: `
      <h1>Welcome ${name}! 🎉</h1>
      <p>Thanks for joining us. Get started by exploring your dashboard.</p>
      <a href="${process.env.NEXTAUTH_URL}/dashboard">Go to Dashboard</a>
    `,
  });
}

export async function sendPasswordResetEmail(email: string, token: string) {
  await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    to: email,
    subject: 'Reset your password',
    html: `
      <h1>Password Reset</h1>
      <p>Click the link below to reset your password:</p>
      <a href="${process.env.NEXTAUTH_URL}/reset-password?token=${token}">Reset Password</a>
    `,
  });
}