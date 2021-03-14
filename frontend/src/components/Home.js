import React, { Component } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const Main_Page = () =>(
  <div class="landing-page">
    <div class="container">
      <div class="header-area">
        <div class="logo">
        <div class="image1">
        <img src="https://i.ibb.co/pwLw2Jm/image-2021-03-12-T015852-969.png"/>
      </div>
          </div>
        <ul class="links">
          <li><a href = "#section-feat" >Features</a></li>
          <li><a href = "#section-hiw" >How it Works</a></li>
          <li><a href="https://devpost.com/software/safe-mailer">Devpost</a></li>
          <li><a href="https://github.com/aniketdhole07/safemailer">Github</a></li>
        </ul>
      </div>
      <div class="info">
        <h1> Want to Send/Recieve  E-Mails without Revealing your Email</h1>
        <p>Welcome to Safe Mailer where we protect your identity by Anonymously Sending or Receiving Emails in Public Internet </p>
      
    <Link to="/send">
    <button  className="button"> Send E-Mail </button>
    </Link>
    <Link to="/rec">
    <button  className="button"> Receive E-Mail </button>
    </Link>

      </div>
      <div class="image">
        <img src="https://i.ibb.co/WVYGWcm/imgonline-com-ua-Replace-Color-Uo-M8-K9-WZ35a-J.jpg"/>
      </div>
      <div class="clearfix"></div>
    </div>
  </div>
)
  
const Features = () => (
      <div className = 'feat'>

          <div className = 'feat1'>
            <div className = 'feat11'>
            <img className = 'img_logo' src="https://i.ibb.co/2897L8j/image-2021-03-14-T005126-730.png" width="150" height="150"/>
            </div>
              <div className = 'feat12'>
                <p>No Login/Signup Required</p>
            </div>
          </div>
    
          <div className = 'feat2'>
            <div className = 'feat21'>
            <img className = 'img_logo' src="https://i.ibb.co/jgrPXWj/image-2021-03-14-T005256-108.png"  width="150" height="150"/>
            </div>
              <div className = 'feat22'>
                <p>Generate Unique ID for Yourself</p>
            </div>
          </div>
          <div className = 'feat3'>
            <div className = 'feat31'>
            <img className = 'img_logo' src="https://i.ibb.co/9NcNH1H/image-2021-03-14-T004927-568.png"  width="150" height="150"/>
            </div>
              <div className = 'feat32'>
                <p>Get Personal Contact Form</p>
            </div>
          </div>
    
      </div>
);

  
const Howitworks = () => (
    <div className = "hiw">
      <div className = "hiwhead">
          How It Works:
      </div>
    <div className = "hiws">
        <div className = "hiw1">
        <h1 class="title">Receiver: </h1>
          <ul>
            <li>Receiver can Generate SM-ID (Safe Mailer -ID) using their Email</li>
            <li>He can Post the ID or Link in his Blog/Website</li>
            <li>He gets his personal Contact Form without Revealing his Personal Details</li>
            <li>No need to SignUP/Login to generate SM-ID</li>
          </ul>
          </div>

        <div className = "hiw2">
        <h1 class="title">Sender: </h1>
          <ul>
            <li>Sender can Open the Form Link from Receiver's Website</li>
            <li>OR He can Send E-Mail directly using his SM-ID</li>
            <li>No need to Enter Sender's Personal Data</li>
          </ul>
          </div>
    </div>
    </div>
);
  
 
  
export default class Home extends Component {
  
    render() {
        return (
            <div>
              <Main_Page/>               
              <section id = "section-feat"><Features /></section>
              <section id = "section-hiw"><Howitworks /></section>
            </div>
        )
    }
}
