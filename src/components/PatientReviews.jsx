import { useState, useEffect } from 'react';
import { images } from '../config/assets';
import '../css/PatientReviews.css';

const slides = images.patientReviews;

const PatientReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getSlideClass = (index) => {
    const offset = (index - currentIndex + slides.length) % slides.length;

    if (offset === 0) return 'patientReview review-slide--active';
    if (offset === 1) return 'patientReview review-slide--next';

    return 'patientReview review-slide--previous';
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="patient" className="section">
      <div className="head">
        <h1>Patient Reviews</h1>
      </div>
      <div className="reviews">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={getSlideClass(index)}
          >
            <img src={slide[0]} alt="Patient Review 1" />
            <img src={slide[1]} alt="Patient Review 2" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientReviews;
