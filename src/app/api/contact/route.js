import { readFileSync } from 'fs';
import nodemailer from 'nodemailer'
import path from 'path'

export async function POST(req) {
    const {name,email,message}  = await req.json()
    

     if( !name || !email || !message){
         return new Response(JSON.stringify({message:'All fields are required'}),{status:400})
     }

     const filepath = path.join(process.cwd(),"src/utils/Email.html");
     const emailTemplate = readFileSync(filepath,'utf-8');
     const htmlContent = emailTemplate.replace(/{name}/g,name).replace(/{email}/g,email).replace(/{message}/g,message)
     
     const transporter = nodemailer.createTransport({
        service: "Gmail",
         host:process.env.SMTP_HOST,
         port:parseInt(process.env.SMTP_PORT || '587'),
         secure:process.env.SMTP_PORT === '465',
         auth:{
             user:process.env.SMTP_USER,
             pass:process.env.SMTP_PASS,
         },
     })

     const mailoptions = {
         from:email,
         to:process.env.CONTACT_EMAIL,
         subject:`Contact Form Submission from ${name}`,
         text:message,
         html:htmlContent,
     }

     try {
         await transporter.sendMail(mailoptions);
         return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
       } catch (error) {
         console.error('Error sending email:', error);
         return new Response(JSON.stringify({ message: 'Failed to send message.' }), { status: 500 });
       }

      return new Response(JSON.stringify({ message: 'Message sent successfully!' }), { status: 200 });
}