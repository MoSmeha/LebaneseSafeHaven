import React, { useState } from "react";
import {
  Instagram,
  Twitter,
  Facebook,
  Phone,
  MessageCircle,
} from "lucide-react";
import imagePath from "./assets/LebUnited.jpg";
import ContactForm from "./Contact";
import "./AboutUs.css";

const AboutUsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <div className="about-us-container">
      {/* Left Half - Image */}
      <div className="about-us-image-container">
        <img src={imagePath} alt="About Us" className="about-us-image" />
      </div>

      {/* Right Half - Content */}
      <div className="about-us-content-container">
        <h1 className="about-us-title">Lebanese Safe Haven</h1>

        <div className="about-us-goal-section">
          <h2 className="about-us-goal-title">Our Goal</h2>
          <p className="about-us-goal-description">
            In the wake of the ongoing conflict, many people and families have
            lost their homes and are struggling to find suitable housing. We aim
            to develop a comprehensive Rent Housing System that helps those
            affected by the war.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="social-media-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </a>
          <a href="https://Phone.com" target="_blank" rel="noopener noreferrer">
            <Phone />
          </a>
        </div>

        {/* Contact Us Button */}
        <button
          onClick={() => setShowContactForm(true)}
          className="contact-us-button"
        >
          <MessageCircle />
          Contact Us
        </button>

        {/* Conditionally Render Contact Form */}
        {showContactForm && (
          <div className="contact-form-modal">
            <div className="contact-form-modal-content">
              <button
                onClick={() => setShowContactForm(false)}
                className="contact-form-close-button"
              >
                ✕
              </button>
              <ContactForm />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUsPage;
