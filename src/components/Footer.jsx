import '../css/Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="text">
        <h3>About Us</h3>
        <p>24X7 Services</p>
        <p>Top Doctors</p>
        <p>Best Care</p>
        <p>Patient Support</p>
      </div>
      <div className="text">
        <h3>Best Teams</h3>
        <p>Doctors</p>
        <p>Engineers</p> 
        <p>Teachers</p> 
        <p>Graduates</p>
        
      </div>
      <div className="text">
        <h3>Address</h3>
        <p><i className="fa-solid fa-map-pin"></i> Balarampur Station road</p>
        <p>Near Phool Chand School</p>
        <p>Opposite Indane Gas office</p>
        <p>West Bengal - 723143</p>
        <p><i className="fa-solid fa-phone"></i> +91 7908187526</p>
      </div>
    </div>
  );
};

export default Footer;
