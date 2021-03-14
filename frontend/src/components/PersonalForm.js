import React, {Component} from 'react';
import axios from 'axios';
import './ContactForm.css'
class PersonalForm extends Component{
  
    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const message = document.getElementById('message').value;
        var email="";
        console.log(this.props.ids);
        for (var index = 0; index < this.props.ids.length; index++) { 
            if(this.props.match.params.id==this.props.ids[index].id){
                email=this.props.ids[index].email;
            }
        }
        if(email.length>=1){
            axios({
                method: "POST", 
                url:"http://localhost:3001/send", 
                data: {
                    name: name,   
                    email: email,  
                    message: message
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                    this.resetForm()
                }else if(response.data.msg === 'fail'){
                    alert("Message failed to send.")
                }
            })
        }
        else{
            alert("Wrong SM-ID");
        }
        
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4 contact_form_body">
                
                <section class="get-in-touch">
                    <h1 class="title">Send Email to {this.props.match.params.id}</h1>
                    <form class="contact-form row form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        <div class="form-field col x-50">
                            <input id="name" class="input-text js-input" type="text"/>
                            <label class="label" for="name">Your Name</label>
                        </div>
                        <div class="form-field col x-100">
                            <input id="message" class="input-text js-input" type="text" required/>
                            <label class="label" for="message">Message</label>
                        </div>
                        <div class="form-field col x-100 align-center">
                            <input class="submit-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                    </section>
            </div>
        )
    }
}

export default PersonalForm; 