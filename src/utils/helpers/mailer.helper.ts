import nodemailer from 'nodemailer';
import { MessageTemplate } from '../interfaces/message-template.interface';

const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;

// Create a transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const messageTemplates: Record<string, MessageTemplate> = {
  default: {
    subject: 'Welcome to our mobile store app',
    text: 'Thank you for signing up!',
    html: '<p>Thank you for signing up!</p>',
  },
  signIn: {
    subject: 'Successful Sign-In Notification',
    text: 'You have successfully signed in to our mobile store app. If this was not you, please contact us immediately.',
    html: '<p>You have successfully signed in to our mobile store app. If this was not you, please contact us immediately.</p>',
  },
  passwordChanged: {
    subject: 'Your Password Has Been Changed',
    text: 'Your password for our mobile store app has been successfully changed. If you did not make this change, please contact us immediately.',
    html: '<p>Your password for our mobile store app has been successfully changed. If you did not make this change, please contact us immediately.</p>',
  },
  payment: {
    subject: 'Payment Successful',
    text: 'Your payment has been successfully processed. Thank you for your purchase!',
    html: '<p>Your payment has been successfully processed. Thank you for your purchase!</p>',
  },
  orderShipped: {
    subject: 'Your Order Has Been Shipped',
    text: 'Your order has been shipped. You will receive it soon.',
    html: '<p>Your order has been shipped. You will receive it soon.</p>',
  },
  orderDelivered: {
    subject: 'Your Order Has Been Delivered',
    text: 'Your order has been delivered. We hope you enjoy your purchase!',
    html: '<p>Your order has been delivered. We hope you enjoy your purchase!</p>',
  },
};
