import nodemailer from 'nodemailer';

let transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '682621b9b44062',
    pass: '5f8628157047f1',
  },
});

export default transport;
