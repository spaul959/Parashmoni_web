import React from 'react';
import '../css/FoundersSection.css';

const FoundersSection = () => {
  return (
    <div className="founders-section">
      <div className="head">
        <h1>Meet Our Founders</h1>
        <p className="subtitle">The visionaries behind Parashmoni Foundation</p>
      </div>
      
      <div className="founders-container">
        <div className="founder-card">
          {/* Updated path */}
          <img src="/assets/images/subham.jpg" alt="Subham Paul" />
          <h3>Dr. Subham Paul</h3>
          <p>Co-Founder</p>
        </div>
        
        <div className="founder-card">
          {/* Updated path */}
          <img src="/assets/images/souvik.jpg" alt="Souvik Paul" />
          <h3>Souvik Paul</h3>
          <p>Co-Founder</p>
        </div>
      </div>
    </div>
  );
};

export default FoundersSection;
