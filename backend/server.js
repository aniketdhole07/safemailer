const express = require('express');
const bodyParser=require('body-parser')
const cors=require('cors')

const port = process.env.PORT || 3001;

const nodemailer = require('nodemailer');
const creds = require('./config');
const app = express()
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended:false}));


// nodemailer
var transport = {
  host: 'smtp.gmail.com', 
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('All Setup!');
  }
});

app.use(express.json());


  
  app.post('/send', (req, res, next) => {
  const name = req.body.name
  const email = req.body.email
  const content = req.body.message
  //console.log(req.body)
  var mail = {
    from: creds.USER,
    to: email,  
    subject: 'Safe Mailer - New Message from '+ name,
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      })
    } else {
      res.json({
        msg: 'success'
      })
    }
  })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })