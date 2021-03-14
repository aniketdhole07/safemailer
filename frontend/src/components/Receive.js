import React, {Component} from 'react';
import {connect} from 'react-redux';
import {submit_to_db} from "../store/solvedAction.js";
import './ContactForm.css'
class Receive extends Component{
    state = {
        id: '',
        email: '',
        flag: false,
        link: "https://safe-mailer.web.app/form/"
    }
    
    handleSubmit(e){
        e.preventDefault();
        e.stopPropagation();
        var email = document.getElementById('email').value;
        var id=Math.random().toString(36).substr(2, 8);
        console.log(id);
        this.setState({
            id: id,
            email: email,
            flag: true,
            link: "https://safe-mailer.web.app/form/"+id
          }, () => {
            this.props.submit_to_db(this.state);

          }); 
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }

    render(){
        return(
            <div className="col-sm-4 offset-sm-4 contact_form_body">
                
                <section class="get-in-touch">
                    <h1 class="title">Generate SM-ID to Receive Email</h1>
                    <form class="contact-form row form" id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                        
                        <div class="form-field col x-100">
                            <input id="email" class="input-text js-input" type="text" required/>
                            <label class="label" for="email">Your E-Mail to Generate SM-ID</label>
                        </div>
                        <div class="form-field col x-100 align-center">
                            <input class="submit-btn" type="submit" value="Submit"/>
                        </div>
                    </form>
                    { this.state.flag ? <h1 class="link_text"><a href={this.state.link}>Your Contact Form Link : <br></br> {this.state.link}</a></h1> : null }
                    { this.state.flag ? <h1 class="link_text"><a href={this.state.link}>Your SM-ID: {this.state.id}</a></h1> : null }
                    </section>
            </div>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
      submit_to_db:(data)=>dispatch(submit_to_db(data))
    }
  }
export default connect(null,mapDispatchToProps)(Receive);