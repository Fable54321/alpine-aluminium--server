// import multer from 'multer';
// import express from 'express';
// import nodeMailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';
// dotenv.config();







// const app = express();
// const { port = 5000 } = process.env;


// app.use(express.json());

// app.use(cors({ origin: (origin, callback) => callback(null, true) }));

// const upload = multer({ storage: multer.memoryStorage() });

// const from = 'timothebissonnette@gmail.com';
// const to = 'timothebissonnette@gmail.com';
// const subject = 'Envoyé depuis le serveur';

// const transport = nodeMailer.createTransport({
//     host: 'email-smtp.ca-central-1.amazonaws.com',
//     port: '587',
//     secure: false,
//     secureConnection: 'STARTTLS',
//     auth: {
//       user: "AKIAVIOZF6PMOH7CPJFH",
//       pass: "BK4fRiNL2cGXvZojm8hQOZKoLXA1K6uRZvYa0induAj2"
//     }
// });



// app.post('/send-email', upload.single('attachment'), (req, res) => {
//   const { nom, Numero, courriel, message } = req.body;
//   const file = req.file;

//   const emailOptions = {
//     from,
//     to,
//     subject,
//     text: `
//       Nom: ${nom}
//       Numero: ${Numero}
//       Courriel: ${courriel}
//       Message: ${message}
//     `,
//     attachments: file ? [{ filename: file.originalname, content: file.buffer }] : []
//   };

//   transport.sendMail(emailOptions)
//     .then(() => {
//       console.log('Email sent');
//       res.status(200).send('Email sent successfully');
//     })
//     .catch(err => {
//       console.error(err);
//       res.status(500).send(`
//         <h1>Erreur</h1>
//         <p>Il y a eu une erreur lors de l'envoi du courriel. Veuillez essayer plus tard</p>
//       `);
//     });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({ origin: (origin, callback) => callback(null, true) }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});