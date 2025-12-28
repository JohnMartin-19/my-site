import { Sparkles, Gift, Calendar } from 'lucide-react';
import './App.css';

export default function App() {
  return (
    <div className="landing-container">
      {/* Hero Section */}
      <div className="hero-section">
        {/* Decorative Background Elements */}
        <div className="background-decorations">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
          <div className="bg-blob-3"></div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <div className="content-wrapper">
            {/* Logo/Brand */}
            <div className="brand-badge">
              
              <span className="brand-text">✨Linka Africa🌍</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="main-heading">
                Happy Holiday Season!
              </h1>
              <div className="christmas-heading-wrapper">
                <span className="emoji-large">🎄</span>
                <span className="christmas-heading">Merry Christmas</span>
                <span className="emoji-large">🎁</span>
              </div>
            </div>

            {/* Decorative Image */}
            

            {/* Message */}
            <div className="message-section">
              <p className="main-message">
                Wishing you joy, peace, and prosperity this festive season
              </p>
              <p className="sub-message">
                As we celebrate the spirit of giving and togetherness, we're filled with gratitude for your continued support.
              </p>
            </div>

            {/* Announcement Card */}
            <div className="announcement-wrapper">
              <div className="announcement-card">
                {/* Decorative Corner Elements */}
                <div className="corner-decoration-1"></div>
                <div className="corner-decoration-2"></div>
                
                <div className="announcement-content">
                  <div className="icon-wrapper">
                    <div className="icon-badge">
                      <Gift className="gift-icon" />
                    </div>
                  </div>
                  
                  <h2 className="announcement-title">
                    Something Exciting is Coming!
                  </h2>
                  
                  <div className="date-box">
                    <div className="date-header">
                      <Calendar className="calendar-icon" />
                      <span className="date-text">January 2026</span>
                    </div>
                    <p className="launch-text">
                      We're launching a brand new product
                    </p>
                  </div>
                  
                  <p className="announcement-description">
                    Stay tuned for an innovation that will transform the way you connect and grow across Africa
                  </p>
                </div>
              </div>
            </div>

            {/* Closing Message */}
            <div className="closing-section">
              <p className="closing-title">
                From all of us at Linka Africa
              </p>
              <p className="closing-text">
                Thank you for being part of our journey. Here's to an amazing 2026! 🎊
              </p>
            </div>
          </div>
        </div>

        {/* Floating Snowflakes/Stars Effect */}
        <div className="floating-decorations">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="floating-sparkle animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            >
              <Sparkles 
                style={{ width: `${10 + Math.random() * 20}px`, height: `${10 + Math.random() * 20}px` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-copyright">
            © 2025 Linka Africa. All rights reserved.
          </p>
          <p className="footer-tagline">
            Built by Kenyans🇰🇪 for Africa🌍
          </p>
        </div>
      </footer>
    </div>
  );
}