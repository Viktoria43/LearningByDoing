import React, { useState } from 'react';
import Header from "./components/Header";
import styled from 'styled-components';
import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 800px;
`;

const FormContainer = styled.div`
  background-color: #FFFFFF;
  padding: 30px;
  text-align: justify;
`;

const Button = styled.button`
  text-decoration: none;
  background-color: black;
  width: 270px; 
  padding: 8px;
  color: white;
  font-size: 1em;
  font-family: 'Futura', 'Trebuchet MS', sans-serif;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  margin-bottom: 40px;
  &:hover {
    background-color: #559;
`;



const Input = styled.input`
  width: 94%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 94%;
  padding: 8px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
`;
 const LargeInput = styled(Input)`
   height: 50px; 
  }
 `;


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

      <div>
      <Header />
      <CenteredContainer className="form-container">
      <FormContainer>
        <h3 style={{ color: '#000000', marginBottom: '15px', fontWeight: '600', textAlign: 'center' }}>Contact us</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              id="from_name"
              name="from_name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              type="email"
              id="from_email"
              name="from_email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
          <LargeInput
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        </FormContainer>
      </CenteredContainer>
    </div>
    );
}

export default Contact;