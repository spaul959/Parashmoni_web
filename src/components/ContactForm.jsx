import { useState } from 'react';
import '../css/ContactForm.css';

const ContactForm = () => {
  // Memory to track if the form was successfully submitted
  const [isSubmitted, setIsSubmitted] = useState(false);

  // This function intercepts the submit button so we can send the data silently
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops the page from refreshing or redirecting
    const form = e.target;
    
    // Grabs all the data they typed in
    const data = new FormData(form);
    
    try {
      // Sends it to Formspree in the background
      const response = await fetch("https://formspree.io/f/YOUR_COPIED_LINK_HERE", {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      // If Formspree says "Got it!", we change the memory to true
      if (response.ok) {
        setIsSubmitted(true);
        form.reset(); // Clears the inputs
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <div id="contact" className="section">
      <div className="head">
        <h1>Contact Us</h1>
      </div>
      
      <div className="contact">
        
        {/* --- If Submitted is TRUE, show the Thank You message --- */}
        {isSubmitted ? (
          <div className="success-message" style={{ padding: '40px 10px' }}>
            <i 
              className="fa-solid fa-circle-check" 
              style={{ fontSize: '50px', color: '#28a745', marginBottom: '20px' }}
            ></i>
            <h2 style={{ color: 'var(--text-dark)' }}>Thank you!</h2>
            <p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
              Your query has been successfully submitted.
            </p>
            
            {/* Optional button to let them submit another query */}
            <button 
              onClick={() => setIsSubmitted(false)} 
              style={{ marginTop: '30px', padding: '12px 25px', width: 'auto' }}
            >
              Submit Another Query
            </button>
          </div>
        ) : (
          /* --- If Submitted is FALSE, show the normal form --- */
          <>
            <h2>Submit your query</h2>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                name="Patient Name" 
                placeholder="Your Full Name" 
                required 
              />
              
              <input 
                type="tel" 
                name="Phone Number" 
                placeholder="10-digit Phone Number" 
                required 
                maxLength="10" 
                pattern="[0-9]{10}" 
                title="Please enter exactly 10 digits" 
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9]/g, '')} 
              />
              
              <textarea 
                name="Message" 
                placeholder="How can we help you?" 
                rows="5" 
                required
              ></textarea>
              
              <button type="submit">Submit Details</button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};

export default ContactForm;
