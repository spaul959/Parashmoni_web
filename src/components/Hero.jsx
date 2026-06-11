import React, { useState } from 'react';
import { images } from '../config/assets';
import '../css/Hero.css';


const Hero = () => {
  const [isCampModalOpen, setIsCampModalOpen] = useState(false);
  const [isClinicModalOpen, setIsClinicModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const doctors = [
    { name: "Dr. Subham Paul", spec: "জেনারেল ফিজিসিয়ান", avail: "বুধবার & রবিবার, 9:30 AM - 12:30 PM" },
    { name: "Dr. Kironmoy Das", spec: "জেনারেল ফিজিসিয়ান ও শিশুরোগ", avail: "মঙ্গলবার ও বৃহস্পতিবার, 2 PM - 5 PM" },
    { name: "Dr. Aniket Chatterjee", spec: "স্নায়ু- মানসিক রোগ বিশেষজ্ঞ", avail: "বুধবার & শুক্রবার, 10 AM - 2 PM" },
    { name: "Dr. Tanmoy Gorain", spec: "জেনারেল ফিজিশিয়ান ও চর্মরোগ", avail: "মঙ্গলবার ও বৃহস্পতিবার - 9:30 AM - 12:30 PM" }
  ];

  return (
    <>
      <div className="main" id="home">
        <div className="mainText">
          <h1>Foundation that <br /> cares for you</h1>
          <h3>ফাউন্ডেশনের উন্নতিকল্পে নূন্যতম অর্থ প্রদান করে <br />ডাক্তার দেখাতে পারেন এবং <br />দুঃস্থদের জন্য থাকছে বিনামূল্যে চিকিৎসার সুযোগ</h3>
          
          <div className="hero-buttons">
            <button className="secondary-btn" onClick={() => setIsCampModalOpen(true)}>
              <i className="fa-solid fa-notes-medical"></i> Health Camp Details
            </button>
            
            {/* Added Clinic Details Button */}
            <button className="secondary-btn" onClick={() => setIsClinicModalOpen(true)} style={{ backgroundColor: '#2c1011', border: '1px solid #fff' }}>
              <i className="fa-solid fa-house-medical"></i> Clinic Details
            </button>
          </div>
        </div>
        
        <div className="mainImage">
          {/* Fixed: Changed {images.hero} to direct path "/mains.png" */}
          <img src={images.hero} alt="Medical Care Illustration" />
        </div>
      </div>

      {/* --- Health Camp Modal --- */}
      {isCampModalOpen && (
        <div className="overlay" onClick={() => setIsCampModalOpen(false)} style={{ display: 'block' }}>
          <div className="detail camp-modal" style={{ display: 'block' }} onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setIsCampModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <div className="camp-content">
              <h2>আসন্ন হেলথ ক্যাম্প</h2>
              <div className="camp-details">
                <div className="camp-info-box">
                  <p><strong><i className="fa-regular fa-calendar"></i> তারিখ:</strong> [৮ ই জুলাই, বুধবার]</p>
                  <p><strong><i className="fa-regular fa-clock"></i> সময়:</strong> [সকাল ৮টা থেকে ২ টা পর্যন্ত]</p>
                  <p><strong><i className="fa-solid fa-location-dot"></i> স্থান:</strong> বলরামপুর স্টেশন রোড, ফুল চাঁদ স্কুলের কাছে, পিন-৭২৩১৪৩</p>
                </div>
                <ul className="camp-service-list">
                  <li><strong>১.</strong> প্রেসার, সুগার পরীক্ষা</li>
                  <li><strong>২.</strong> হার্ট চেকআপ (ই সি জি)</li>
                  <li><strong>৩.</strong> হাঁড়ের ক্ষয়ের পরীক্ষা (বোন স্ক্যান)</li>
                  <li><strong>৪.</strong> শ্বাসকষ্টের/ ফুসফুসের পরীক্ষা (PFT)</li>
                  <li><strong>৫.</strong> নার্ভের সমস্যায় নিউরো ডিটেকশন টেস্ট</li>
                  <li><strong>৬.</strong> মাইগ্রেনের সমস্যায়- বিট মাইগ্রেন টেস্ট</li>
                  <li><strong>৭.</strong> যেকোনো ব্যথার সমস্যায়- ফিজিওথেরপি ও ব্যায়াম শেখানো</li>
                  <li><strong>৮.</strong> দাঁতের চিকিৎসা (ডেন্টাল চেকআপ)</li>
                  <li><strong>৯.</strong> রক্ত পরীক্ষা- হিমোগ্লোবিন, কোলেস্টেরল , ভিটামিন-ডি এলার্জি টেস্ট (IgE), HbA1C</li>
                </ul>

                <div className="camp-actions">
                  <a href="https://forms.gle/sy3jJKudiX8AkxBN6" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- Clinic Details Modal --- */}
      {isClinicModalOpen && (
        <div className="overlay" onClick={() => setIsClinicModalOpen(false)} style={{ display: 'block' }}>
          <div className="detail camp-modal" style={{ display: 'block' }} onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setIsClinicModalOpen(false)}><i className="fa-solid fa-xmark"></i></button>
            <div className="camp-content">
              <h2>Clinic Details</h2>
              {!selectedDoctor ? (
                <div className="camp-details">
                  <p>Welcome to Parashmani Foundation Clinic.</p>
                  <p><strong>Location:</strong> Balarampur Station Road.</p>
                  <h4 style={{ margin: '20px 0 10px' }}>Select a Doctor:</h4>
                  <div className="hero-buttons" style={{ justifyContent: 'center' }}>
                    {doctors.map((doc, index) => (
                      <button key={index} className="secondary-btn" onClick={() => setSelectedDoctor(doc)}>
                        {doc.name}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="camp-details">
                  <button onClick={() => setSelectedDoctor(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary-color)' }}>
                    <i className="fa-solid fa-arrow-left"></i> Back to Doctors
                  </button>
                  <div className="camp-info-box" style={{ marginTop: '15px' }}>
                    <h3>{selectedDoctor.name}</h3>
                    <p><strong>Specialization:</strong> {selectedDoctor.spec}</p>
                    <p><strong>Availability:</strong> {selectedDoctor.avail}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
