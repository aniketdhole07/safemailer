

### Check Out Live Version: [https://safe-mailer.web.app/](https://safe-mailer.web.app/)

### And You Can Contact Me At [https://safe-mailer.web.app/form/yr6cuakb](https://safe-mailer.web.app/form/yr6cuakb)

## Inspiration
Have you realised sometimes you need to put your Email Address on Public Forum of Website so people can communicate but get afraid due to Phishing or Spam Emails from marketing companies.

Almost everyone receive SPAM Emails everyday , but they also need to use their Email for Communication. People hesitate to put their mail address for communication over internet like on their blog/website/resume ,etc. 

## What it does
It converts your mail into unique SM-ID (Safe Mailer ID) which generates a personal Contact Form for your Email address without revealing your Real Email Address. You can Share the Form link to anyone or directly link it on your Website/Blog. 

For Sending Mails you will just need the SM-ID (Safe Mailer ID) of receiver to send mails.

For Generation of ID I have used 8 Character Random Generator instead of Hash Function to avoid Data Dencryption of User.

## How we built it
I used React.js to build the UI of site and Hosted on Firebase
For Backend there is a SMTP server setup in Express.js and Hosted on Heroku
For Database I have used Firebase.

<a href="https://ibb.co/yy79cd6"><img src="https://i.ibb.co/swzfdbK/sfm-1.png" alt="sfm-1" border="0"></a>

## Challenges we ran into
1. Setting up the Security of SMTP server was tricky
2. API calling and hosting of Backend Server was difficult

## Accomplishments that we're proud of
1. Created a Completed Project which can be used by anyone directly
2. User will benefit from it as it protects their identity and will have good application in Cybersecurity

## What we learned
1. SMTP Mailing Server Hosting and setup.
2. Generation of Random ID and Mapping it to Mail in Database

## What's next for Safe Mailer
1. Adding Inbuilt SPAM classifier.
2. Adding More Security protocols like encrypting the SM-ID
