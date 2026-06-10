import React from 'react';
import '../css/PeopleServed.css'; /* <-- We imported your new CSS file here! */

const PeopleServed = () => {
  return (
    <div id="impact" className="section stats-section">
      <div className="head">
        <h1>Our Impact</h1>
        <p className="subtitle">Dedicated to serving our community with care and compassion</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <i className="fa-solid fa-users stat-icon"></i>
          <h2>600+</h2>
          <p>People Served</p>
        </div>

        <div className="stat-card">
          <i className="fa-solid fa-house-medical-circle-check stat-icon"></i>
          <h2>2</h2>
          <p>Health Camps</p>
        </div>

        <div className="stat-card">
          <i className="fa-solid fa-user-doctor stat-icon"></i>
          <h2>10+</h2>
          <p>Expert Doctors</p>
        </div>
      </div>
    </div>
  );
};

export default PeopleServed;
