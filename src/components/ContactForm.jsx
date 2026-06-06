import { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  return (
    <div id="contact" className="section">
      <div className="head">
        <h1>Contact Us</h1>
      </div>
      
      <div className="contact">
        <h2>Submit your Query</h2>
        
        {/* --- Formspree Magic Happens Here --- */}
        <form 
          action="https://formspree.io/f/YOUR_COPIED_LINK_HERE" 
          method="POST"
        >
          {/* The "name=" attribute is very important! It tells Formspree what to call the data in your email */}
          <input 
            type="text" 
            name="Patient Name" 
            placeholder="Your Full Name" 
            required 
          />
          
          <input 
            type="tel" 
            name="Phone Number" 
            placeholder="Your Phone Number" 
            required 
          />
          
          <textarea 
            name="Message" 
            placeholder="How can we help you?" 
            rows="5" 
            required
          ></textarea>
          
          <button type="submit">Submit Details</button>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
