import nodemailer from 'nodemailer';
import { emailPass, emailService, emailUser } from '../../config/initial.config.js';

const transporter = nodemailer.createTransport({
    service: emailService,
    auth: {
        user: emailUser,
        pass: emailPass
    }
});

const sendVerificationEmail = (to, verificationLink) => {

    const mailOptions = {
        from: emailUser,
        to,
        subject: "Verification Email",
        html: `click the link below to verify your email ${verificationLink}`
    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log("error sending verification", error);
            return "failed to send verification";
        } else {
            console.log("successfully sending verification");
            return "successfully sent verification";
        }
    });

};

export default sendVerificationEmail;