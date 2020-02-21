import React, { Component } from 'react';
import axios from 'axios';
import {ToastsStore} from 'react-toasts';
import {BASE_URL, SEND_EMAIL} from '../../apis';

export default class ContactUs extends Component {
  state = {
    name: "",
    email: "",
    message: "",
    nameValid: true,
    emailValid: true,
    msgValid: true
  };

  handleChangeName = (e) => {
    this.setState({name: e.target.value, nameValid: true});
  };
  handleChangeEmail = (e) => {
    this.setState({email: e.target.value, emailValid: true});
  };
  handleChangeMessage = (e) => {
    this.setState({message: e.target.value, msgValid: true});
  };
  onSendEmail = () => {
    const {name, email, message} = this.state;
    const {resumeData} = this.props;

    let nameValid = false,
        emailValid = false,
        msgValid = false;
        
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValid_ = re.test(email);

    nameValid = (name !== "");
    msgValid = (message !== "");
    emailValid = (email !== "" && emailValid_);

    this.setState({nameValid, msgValid, emailValid});
    if (!nameValid || !msgValid || !emailValid) return;

    const subject = `Interview Request on ${resumeData.name} Portfolio`;
    const body = { name, email, message, subject };
    const self = this;

    axios.post(`${BASE_URL}${SEND_EMAIL}`, body)
      .then( response => { 
        ToastsStore.success('Thanks for contacting me. We will be right back to you!');
        self.setState({name: "", email: "", message: ""});
      } )
      .catch( response => {
        ToastsStore.error('Contacting was failed, please try again later!');
      } );
  }

  render() {
    const {name, email, message, nameValid, emailValid, msgValid} = this.state;
    
    return ( <>
      <section id="contact">
        <h2 style={{textAlign:"center", color: "white"}}>Get In Touch</h2>
        <div className="contact-container">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" placeholder="Your name" value={name} onChange={this.handleChangeName} />
            {!nameValid ? <p className="error">Name should be not empty ***</p> : <br/>}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email Address" value={email} onChange={this.handleChangeEmail} />
            {!emailValid ? <p className="error">Email should be not empty or valid one ***</p> : <br/>}
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write something.." style={{height:"200px"}} value={message} onChange={this.handleChangeMessage} ></textarea>
            {!msgValid ? <p className="error">Message should be not empty *** </p> : <br/>}
          </div>
          <div>
            <button onClick={this.onSendEmail}>Send Email</button>
          </div>
        </div>
      </section>
      <section>
        <div className="map-contact">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.256700778472!2d19.799153615079632!3d41.32503107927003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031ab88198e6b%3A0x622ceb5a29b36d39!2zUnJ1Z2EgZSBLYXZhasOrcywgVGlyYW7DqywgU2hxaXDDq3JpYQ!5e0!3m2!1ssq!2s!4v1532722376734" style={{width: "100%", height:"250px", frameborder: "0"}} allowFullScreen></iframe>
        </div>
      </section> </>
      );
  }
}


