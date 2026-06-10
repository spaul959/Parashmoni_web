import { useState } from 'react';
import { images } from '../config/assets';
import '../css/Hero.css';

const Hero = () => {
  // State to control the pop-up modal
  const [isCampModalOpen, setIsCampModalOpen] = useState(false);

  return (
    <>
      <div className="main" id="home">
        <div className="mainText">
          <h1>Foundation that <br /> cares for you</h1>
          <h3>ফাউন্ডেশনের উন্নতিকল্পে নূন্যতম অর্থ প্রদান করে <br />ডাক্তার দেখাতে পারেন এবং <br />দুঃস্থদের জন্য থাকছে বিনামূল্যে চিকিৎসার সুযোগ</h3>
          
          <div className="hero-buttons">
            <button className="secondary-btn" onClick={() => setIsCampModalOpen(true)}>
              <i className="fa-solid fa-notes-medical"></i>
              Health Camp Details
            </button>
          </div>
        </div>
        <div className="mainImage">
          <img src={images.hero} alt="Medical Care Illustration" />
        </div>
      </div>

      {/* --- Health Camp Details Pop-Up Modal --- */}
      {isCampModalOpen && (
        <>
          <div className="overlay is-visible" onClick={() => setIsCampModalOpen(false)}></div>
          
          <div className="detail is-visible camp-modal">
            <button className="closeBtn" onClick={() => setIsCampModalOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            
            <div className="camp-content">
              <h2>
                আসন্ন হেলথ ক্যাম্প
              </h2>
              
              <div className="camp-details">
                <div className="camp-info-box">
                  <p><strong><i className="fa-regular fa-calendar"></i> তারিখ:</strong> [৮ ই জুলাই, বুধবার]</p>
                  <p><strong><i className="fa-regular fa-clock"></i> সময়:</strong> [সকাল ৮টা থেকে ২ টা পর্যন্ত]</p>
                  <p><strong><i className="fa-solid fa-location-dot"></i> স্থান:</strong> বলরামপুর স্টেশন রোড, ফুল চাঁদ স্কুলের কাছে, পিন-৭২৩১৪৩</p>
                </div>

                <p className="camp-list-title"><strong><i className="fa-solid fa-notes-medical"></i> স্বাস্থ্য শিবিরে যে সমস্ত পরীক্ষা ও চিকিৎসা করা হবে:</strong></p>
                
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
                
                

                {/* --- Google Form Registration Button --- */}
                <div className="camp-actions">
                  <a 
                    href="https://forms.gle/sy3jJKudiX8AkxBN6" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="secondary-btn"
                  >
                    <i className="fa-solid fa-clipboard-list"></i>
                    Register Now
                  </a>
                </div>

              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
