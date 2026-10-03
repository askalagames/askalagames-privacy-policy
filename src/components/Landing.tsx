import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Landing.css'
import * as PablikObject from '../pablikObjek'
import askalaLogo from '../assets/askala-games-logo.png'

export default function Landing() {
  const [hoveredGame, setHoveredGame] = useState<string | null>(null)
  const nav = useNavigate()

  const pindahHalaman = (hal: string) => {
    nav(hal)
  }

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-logo-wrapper">
            <img src={askalaLogo} alt="Askala Games Logo" className="hero-logo" />
          </div>
          <h1 className="hero-title">Askala Games</h1>
          <p className="hero-subtitle">Crafting Experiences. Creating Worlds.</p>
          <p className="hero-description">
            We create immersive, innovative gaming experiences that captivate and inspire players around the globe.
          </p>
          <button
            className="cta-button"
            onClick={() => pindahHalaman('')}
          >
            Explore Our Games
          </button>
        </div>
        <div className="hero-accent"></div>
      </section>

      {/* Featured Games Section */}
      <section className="featured-section">
        <h2>Our Games</h2>
        <p className="section-subtitle">Discover the games we've crafted with passion and precision</p>

        <div className="games-grid">
          {/* NumFlash Game Card */}
          <div
            className={`game-card ${hoveredGame === 'numflash' ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredGame('numflash')}
            onMouseLeave={() => setHoveredGame(null)}
          >
            <div className="game-card-image numflash-bg">
              <div className="game-badge">Coming Soon</div>
            </div>
            <div className="game-card-content">
              <h3>NumFlash</h3>
              <p>Challenge your mind with lightning-fast number puzzles. Test your reflexes and memory in this addictive gameplay experience.</p>
              <div className="game-tags">
                <span>Puzzle</span>
                <span>Casual</span>
                <span>Mobile</span>
              </div>
              <button
                className="play-button"
                onClick={() => pindahHalaman(PablikObject.alamatDasarRouter + PablikObject.alamatNumFlash)}
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Coming Soon Card */}
          <div className="game-card coming-soon">
            <div className="game-card-image placeholder-bg">
              <div className="game-badge">Coming Soon</div>
            </div>
            <div className="game-card-content">
              <h3>More Adventures</h3>
              <p>We're working on exciting new titles that will push the boundaries of mobile gaming.</p>
              <div className="game-tags">
                <span>Action</span>
                <span>Adventure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>About Askala Games</h2>
          <p>
            Founded with a vision to create world-class gaming experiences, Askala Games is dedicated to innovation,
            quality, and player satisfaction. Our team of passionate developers and designers work tirelessly to bring
            imaginative worlds and engaging gameplay to your mobile device.
          </p>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎮</div>
              <h4>Innovative Gameplay</h4>
              <p>Unique mechanics that challenge and delight</p>
            </div>
            <div className="feature">
              <div className="feature-icon">✨</div>
              <h4>Premium Quality</h4>
              <p>Polished experiences crafted with attention to detail</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌍</div>
              <h4>Global Community</h4>
              <p>Connect with players worldwide</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h4>Continuous Innovation</h4>
              <p>Regular updates and new content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <img src={askalaLogo} alt="Askala Games Logo" className="footer-logo" />
              <h4>Askala Games</h4>
            </div>
            <p>Creating exceptional gaming experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#games">Games</a></li>
              <li><a href="#about">About</a></li>
              <li><button onClick={() => pindahHalaman(PablikObject.alamatDasarRouter + PablikObject.alamatNumFlash + '/' + PablikObject.alamatPrivacy)}>
                Privacy Policy
              </button></li>
              <li><a href="mailto:contact@askalagames.com">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" title="Twitter">𝕏</a>
              <a href="#" title="Facebook">f</a>
              <a href="#" title="Instagram">📷</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Askala Games. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
