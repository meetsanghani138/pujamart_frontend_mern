import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Pandit.css";

import ramesh from "../assets/images/rameshpandit.png";
import mahesh from "../assets/images/maheshjoshi.png";
import harish from "../assets/images/harish.png";

function Pandit() {
  const [selectedPandit, setSelectedPandit] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    pujaType: "",
    address: "",
    panditName: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState("pandits");

  const pandits = [
    {
      id: 1,
      name: "Pandit Ramesh Sharma",
      experience: "15 Years",
      specialty: "Satyanarayan Katha",
      rating: 4.9,
      reviews: 128,
      price: "₹5,000",
      languages: ["Hindi", "Sanskrit"],
      image: ramesh,
      availability: "Available Today"
    },
    {
      id: 2,
      name: "Pandit Mahesh Joshi",
      experience: "12 Years",
      specialty: "Navgraha Puja",
      rating: 4.8,
      reviews: 95,
      price: "₹4,500",
      languages: ["Hindi", "Sanskrit", "English"],
      image: mahesh,
      availability: "Available Tomorrow"
    },
    {
      id: 3,
      name: "Pandit Harish Bhatt",
      experience: "10 Years",
      specialty: "Rudrabhishek",
      rating: 4.9,
      reviews: 156,
      price: "₹6,000",
      languages: ["Hindi", "Sanskrit"],
      image: harish,
      availability: "Available Today"
    }
  ];

  const pujaServices = [
    { name: "Griha Pravesh Puja", price: "₹3,500", duration: "2-3 hrs", icon: "🏠" },
    { name: "Satyanarayan Katha", price: "₹4,000", duration: "3-4 hrs", icon: "📖" },
    { name: "Rudrabhishek", price: "₹5,500", duration: "2 hrs", icon: "🔱" },
    { name: "Vivah Puja", price: "₹8,000", duration: "4-5 hrs", icon: "💒" },
    { name: "Navgraha Shanti", price: "₹6,000", duration: "3 hrs", icon: "🌞" },
    { name: "Lakshmi Puja", price: "₹3,500", duration: "2 hrs", icon: "💰" },
    { name: "Mundan Sanskar", price: "₹4,500", duration: "2-3 hrs", icon: "✂️" },
    { name: "Annaprashan", price: "₹3,000", duration: "1-2 hrs", icon: "🍚" }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookPandit = (pandit) => {
    setSelectedPandit(pandit);
    setFormData({
      ...formData,
      panditName: pandit.name
    });
    document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({
      name: "",
      phone: "",
      city: "",
      date: "",
      pujaType: "",
      address: "",
      panditName: ""
    });
    setSelectedPandit(null);
  };

  return (
    <>
      <Navbar />

      {/* Success Toast */}
      {showSuccess && (
        <div className="success-toast">
          <span className="toast-icon">✅</span>
          <div className="toast-content">
            <strong>Booking Confirmed!</strong>
            <p>We'll contact you shortly with pandit details.</p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pandit-hero">
        <div className="hero-floating-elements">
          <div className="floating-element">🕉️</div>
          <div className="floating-element">🔱</div>
          <div className="floating-element">🙏</div>
          <div className="floating-element">🪔</div>
          <div className="floating-element">📿</div>
        </div>
        <div className="hero-content">
          <h1>Book Experienced Pandits</h1>
          <p>Perform your rituals with authentic Vedic traditions</p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Expert Pandits</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Rituals Performed</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Customer Rating</span>
            </div>
          </div>
          <button className="book-btn" onClick={() => document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' })}>
            Book Your Pandit Now
            <span className="btn-icon">→</span>
          </button>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === 'pandits' ? 'active' : ''}`}
          onClick={() => setActiveTab('pandits')}
        >
          <span className="tab-icon">🙏</span>
          Our Pandits
        </button>
        <button 
          className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => setActiveTab('services')}
        >
          <span className="tab-icon">🪔</span>
          Puja Services
        </button>
      </div>

      {/* Pandit Cards Section */}
      {activeTab === 'pandits' && (
        <section className="pandit-section">
          <div className="section-header">
            <h2 className="section-title">Meet Our Pandits</h2>
            <p className="section-subtitle">Experienced, knowledgeable, and dedicated to authentic Vedic rituals</p>
          </div>

          <div className="pandit-grid">
            {pandits.map((pandit, index) => (
              <div className="pandit-card" key={pandit.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="card-badge">
                  {pandit.availability === "Available Today" ? (
                    <span className="available-badge">Available Today</span>
                  ) : (
                    <span className="tomorrow-badge">Available Tomorrow</span>
                  )}
                </div>
                <div className="pandit-image-wrapper">
                  <img src={pandit.image} alt={pandit.name} className="pandit-img" />
                  <div className="image-overlay">
                    <div className="rating-badge">
                      <span className="stars">★</span>
                      <span className="rating">{pandit.rating}</span>
                      <span className="reviews">({pandit.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="pandit-info">
                  <h3>{pandit.name}</h3>
                  <div className="experience-badge">
                    <span className="exp-icon">📅</span>
                    <span>{pandit.experience} Experience</span>
                  </div>
                  <div className="specialty">
                    <span className="specialty-icon">✨</span>
                    <span>{pandit.specialty}</span>
                  </div>
                  <div className="languages">
                    {pandit.languages.map(lang => (
                      <span key={lang} className="language-tag">{lang}</span>
                    ))}
                  </div>
                  <div className="price-info">
                    <span className="price-label">Starting from</span>
                    <span className="price-value">{pandit.price}</span>
                  </div>
                  <button className="book-pandit-btn" onClick={() => handleBookPandit(pandit)}>
                    Book This Pandit
                    <span className="btn-arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Puja Services Section */}
      {activeTab === 'services' && (
        <section className="puja-services">
          <div className="section-header">
            <h2 className="section-title">Popular Puja Services</h2>
            <p className="section-subtitle">Choose from a wide range of authentic Vedic rituals</p>
          </div>

          <div className="services-grid">
            {pujaServices.map((service, index) => (
              <div className="service-card" key={service.name} style={{ animationDelay: `${index * 0.05}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <div className="service-details">
                  <div className="service-price">{service.price}</div>
                  <div className="service-duration">⏱️ {service.duration}</div>
                </div>
                <button className="service-btn" onClick={() => {
                  setFormData({ ...formData, pujaType: service.name });
                  document.getElementById('booking-section').scrollIntoView({ behavior: 'smooth' });
                }}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Booking Form Section */}
      <section id="booking-section" className="booking-section">
        <div className="section-header">
          <h2 className="section-title">Book a Pandit</h2>
          <p className="section-subtitle">Fill the details and we'll arrange everything for you</p>
        </div>

        {selectedPandit && (
          <div className="selected-pandit-card">
            <div className="selected-pandit-info">
              <span className="selected-icon">🙏</span>
              <div>
                <strong>Selected Pandit:</strong> {selectedPandit.name}
                <span className="selected-specialty">({selectedPandit.specialty})</span>
              </div>
            </div>
            <button className="change-pandit-btn" onClick={() => setSelectedPandit(null)}>Change</button>
          </div>
        )}

        <form className="booking-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Your Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <span className="input-icon">👤</span>
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Enter your mobile number" 
                value={formData.phone}
                onChange={handleInputChange}
                required 
              />
              <span className="input-icon">📞</span>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input 
                type="text" 
                name="city" 
                placeholder="Enter your city" 
                value={formData.city}
                onChange={handleInputChange}
                required 
              />
              <span className="input-icon">🏙️</span>
            </div>

            <div className="form-group">
              <label>Select Date</label>
              <input 
                type="date" 
                name="date" 
                value={formData.date}
                onChange={handleInputChange}
                required 
              />
              <span className="input-icon">📅</span>
            </div>
          </div>

          <div className="form-group">
            <label>Select Puja Type</label>
            <select name="pujaType" value={formData.pujaType} onChange={handleInputChange} required>
              <option value="">Choose a puja service</option>
              {pujaServices.map(service => (
                <option key={service.name} value={service.name}>{service.name} - {service.price}</option>
              ))}
            </select>
            <span className="input-icon">🪔</span>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea 
              name="address" 
              placeholder="Enter your complete address" 
              rows="3"
              value={formData.address}
              onChange={handleInputChange}
              required
            ></textarea>
            <span className="input-icon">📍</span>
          </div>

          <button type="submit" className="submit-btn">
            <span className="btn-text">Confirm Booking</span>
            <span className="btn-icon">📿</span>
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
}

export default Pandit;