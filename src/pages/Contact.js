import React, { useState } from 'react';
import Header from "./components/Header";
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';

function Contact(){

    const [formData, setFormData] = useState({});
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_6mudavr', 'template_2f7956a', e.target, '6DKJjK_0GdoAShPJC')
          .then((result) => {
            console.log('Email sent successfully!', result.text);
          })
          .catch((error) => {
            console.error('There was an error sending the email:', error);
          });
    
        //Clear data
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };


    return (

      <form onSubmit={handleSubmit}>
      <div>
      <Header />
      
    
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="from_name"
          name="from_name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="from_email"
          name="from_email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" >Submit</button>
    </form>
    );
}

export default Contact;