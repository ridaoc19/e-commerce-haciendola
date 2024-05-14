import { Resend } from 'resend';
import { User } from '../../../modules/user/tools/interface';
import { templateRegistre } from './template';

const resend = new Resend(process.env.EMAIL_KEY_RESEND);

type SendEmail = Pick<User.Content, 'name' | 'email' | 'password' | 'type'> & { tokenEmail?: string };

export async function sendEmail({ name, email, password, type, tokenEmail }: SendEmail) {
  try {
    const { subject, html }: { subject: string, html: string } = templateRegistre({ tokenEmail, name, password, type });

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_RESEND,
      to: [email],
      subject,
      html,
    });

    if (error) {
      console.log(error)
      return false
    }

    return true;
  } catch (error) {
    console.log(error)
    return false;
  }
}