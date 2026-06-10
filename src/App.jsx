import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DoctorSection from './components/DoctorSection';
import PatientReviews from './components/PatientReviews';
import PeopleServed from './components/PeopleServed';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <DoctorSection />
      <PatientReviews />
      
      <PeopleServed />  {/* <-- 2. Place it right before the ContactForm! */}
      
      <ContactForm />
      <Footer />
    </div>
  );
}
