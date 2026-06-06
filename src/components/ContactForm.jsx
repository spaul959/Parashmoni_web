import { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  const [number, setNumber] = useState('');
  const [query, setQuery] = useState('');

  const handleNumberChange = (e) => {
    const value = e.target.value;

    if (value === '' || /^[0-9]+$/.test(value)) {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanNumber = number.trim();
    const cleanQuery = query.trim();

    if (!cleanNumber || !cleanQuery) {
      alert('Please enter both your phone number and your query.');
      return;
    }

    if (!/^\d{10}$/.test(cleanNumber)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    alert('Thank you! Your query has been successfully submitted.');
    setNumber('');
    setQuery('');
  };

  return (
    <div id="contact" className="section">
      <div className="head">
        <h1>Contact Us</h1>
      </div>
      
      <form className="contact" onSubmit={handleSubmit}>
        <h2>Submit your query</h2>
        
        {/* Phone Number Input */}
        <input 
          type="tel" 
          placeholder="Enter 10-digit mobile number" 
          value={number}
          onChange={handleNumberChange}
          maxLength="10"
        />
        
        {/* Query/Message Textarea */}
        <textarea 
          placeholder="Enter your query or message" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
