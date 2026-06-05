import { useState } from 'react';
import { images } from '../config/assets';
import '../css/DoctorSection.css';

const DoctorSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div id="doctor" className="section">
      <div className="head">
        <h1>Our Doctors</h1>
        <p className="subtitle">Meet our experienced medical professionals</p>
      </div>
      <div className="teams">
        <div className="card" onClick={() => setIsModalOpen(true)}>
          <img src={images.doctor} alt="Dr. Subham Paul" />
          <div className="card-info">
            <h2>Subham Paul</h2>
            <p className="specialty">General Physician</p>
            <p className="location"><i className="fa-solid fa-location-dot"></i> Bankura BSMCH</p>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <>
          <div className="overlay is-visible" onClick={() => setIsModalOpen(false)}></div>
          <div className="detail is-visible doctor-modal">
            <button className="closeBtn" onClick={() => setIsModalOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="content">
              <img src={images.doctor} alt="Dr. Subham Paul" />
              <div className="contentText">
                <h1>Subham Paul</h1>
                <p>General Physician, MBBS, BSMCH.</p>
                <p className="doctor-bio">
                  Dedicated professional with extensive experience in general medicine, providing comprehensive care and consultation.
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DoctorSection;
