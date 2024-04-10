import { MailOptions } from 'nodemailer/lib/sendmail-transport';
import { messageTemplates, transporter } from '../utils/helpers/mailer.helper';
import { OrderStatus } from '../utils/types/order-status.type';

const EMAIL: string = process.env.EMAIL || '';

export class MailService {
  private createMailOptions(
    email: string,
    templateName: string = 'default',
  ): MailOptions {
    const template = messageTemplates[templateName] || messageTemplates.default;
    return {
      from: EMAIL,
      to: email,
      subject: template.subject,
      text: template.text,
      html: template.html,
    };
  }

  private async send(mailOptions: MailOptions) {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });
  }

  async welcome(email: string) {
    const mailOptions: MailOptions = this.createMailOptions(email);
    await this.send(mailOptions);
  }

  async signIn(email: string) {
    const mailOptions: MailOptions = this.createMailOptions(email, 'signIn');
    await this.send(mailOptions);
  }

  async passwordChanged(email: string) {
    const mailOptions: MailOptions = this.createMailOptions(
      email,
      'passwordChanged',
    );
    await this.send(mailOptions);
  }

  async payment(email: string) {
    const mailOptions: MailOptions = this.createMailOptions(email, 'payment');
    await this.send(mailOptions);
  }

  async order(email: string, status: string) {
    let templateName: string;
    if (status === OrderStatus.SHIPPED) {
      templateName = 'orderShipped';
    } else {
      templateName = 'orderDelivered';
    }
    const mailOptions: MailOptions = this.createMailOptions(
      email,
      templateName,
    );
    await this.send(mailOptions);
  }
}
