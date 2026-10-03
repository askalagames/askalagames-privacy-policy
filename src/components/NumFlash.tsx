import { useNavigate } from 'react-router-dom'
import '../styles/NumFlash.css'
import * as PablikObject from '../pablikObjek'
import askalaLogo from '../assets/askala-games-logo.png'
import mainMenuImg from '../assets/main-menu.jpg'
import gameplayImg from '../assets/gameplay.jpg'
import gameResultImg from '../assets/game-result.jpg'

const screenshots = [
  {
    id: 'main-menu',
    title: 'Main Menu',
    caption: 'Intuitive interface with quick access to Play, Challenge modes, and Settings.',
    src: mainMenuImg,
  },
  {
    id: 'gameplay',
    title: 'Number Flash Gameplay',
    caption: 'Fast-paced number flashes that push your memory and reflexes to the limit.',
    src: gameplayImg,
  },
  {
    id: 'game-result',
    title: 'Instant Results & Review',
    caption: 'Real-time performance feedback to help you analyze mistakes and beat high scores.',
    src: gameResultImg,
  },
]

export default function NumFlash() {
  const nav = useNavigate()

  const pindahHalaman = (hal: string) => {
    nav(hal)
  }

  return (
    <div className="game-home-container">
      {/* Game Header */}
      <header className="game-header">
        <button className="back-button" onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
          ← Back to Home
        </button>
        <div className="game-header-brand" onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
          <img src={askalaLogo} alt="Askala Games Logo" className="header-logo" />
          <span className="brand-name">Askala Games</span>
        </div>
        <h1>NumFlash</h1>
        <p className="game-tagline">Challenge Your Mind. Test Your Speed.</p>
      </header>

      {/* Game Hero */}
      <section className="game-hero">
        <div className="game-hero-content">
          <div className="hero-phone-mockup">
            <div className="phone-screen">
              <img src={mainMenuImg} alt="NumFlash Game Preview" className="hero-mockup-img" />
            </div>
          </div>
          <div className="hero-text">
            <h2>Lightning-Fast Number Puzzles</h2>
            <p>
              NumFlash is an addictive puzzle game that combines quick thinking with strategic gameplay. 
              Race against the clock, match numbers, and unlock achievements as you climb the leaderboards.
            </p>
            <div className="game-stats">
              <div className="stat">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Players</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.8★</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat">
                <span className="stat-number">50M+</span>
                <span className="stat-label">Games Played</span>
              </div>
            </div>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="download-button">
              📲 Download on Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="game-features">
        <h2>Game Features</h2>
        <div className="features-showcase">
          <div className="feature-card">
            <div className="feature-num">01</div>
            <h3>Multiple Game Modes</h3>
            <p>Classic Mode, Timed Challenge, Endless Run, and more. Each mode offers unique gameplay mechanics and difficulty levels.</p>
          </div>
          <div className="feature-card">
            <div className="feature-num">02</div>
            <h3>Global Leaderboards</h3>
            <p>Compete with millions of players worldwide. Track your progress and climb to the top rankings.</p>
          </div>
          <div className="feature-card">
            <div className="feature-num">03</div>
            <h3>Achievement System</h3>
            <p>Unlock 50+ unique achievements and earn badges as you master different game modes and challenges.</p>
          </div>
          <div className="feature-card">
            <div className="feature-num">04</div>
            <h3>Daily Challenges</h3>
            <p>Fresh challenges every day with exclusive rewards. Complete daily quests to earn bonus coins and power-ups.</p>
          </div>
          <div className="feature-card">
            <div className="feature-num">05</div>
            <h3>Power-ups & Boosters</h3>
            <p>Use strategic power-ups to enhance your gameplay. Freeze time, multiply points, or reveal hidden numbers.</p>
          </div>
          <div className="feature-card">
            <div className="feature-num">06</div>
            <h3>Offline Play</h3>
            <p>Play anywhere, anytime. The game works seamlessly offline with automatic cloud synchronization.</p>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="screenshots-section">
        <h2>Game Screenshots</h2>
        <p className="section-subtitle">Explore the visual beauty and gameplay experience</p>
        <div className="screenshots-grid">
          {screenshots.map((shot) => (
            <div key={shot.id} className="screenshot-card">
              <div className="screenshot-image-wrapper">
                <img src={shot.src} alt={shot.title} className="screenshot-img" />
                <div className="screenshot-overlay">
                  <span className="screenshot-badge">{shot.title}</span>
                </div>
              </div>
              <div className="screenshot-info">
                <h3>{shot.title}</h3>
                <p>{shot.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className="specifications">
        <h2>Specifications</h2>
        <div className="specs-grid">
          <div className="spec-item">
            <span className="spec-label">Platform</span>
            <span className="spec-value">Android 6.0+</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">File Size</span>
            <span className="spec-value">45 MB</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Developer</span>
            <span className="spec-value">Askala Games</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Version</span>
            <span className="spec-value">1.0.0</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Updates</span>
            <span className="spec-value">Regular</span>
          </div>
          <div className="spec-item">
            <span className="spec-label">Offline Mode</span>
            <span className="spec-value">Yes</span>
          </div>
        </div>
      </section>

      {/* Premium Version */}
      <section className="premium-section">
        <h2>Premium Features</h2>
        <div className="premium-content">
          <div className="premium-benefits">
            <h3>Upgrade to Premium</h3>
            <ul className="benefits-list">
              <li>✓ Ad-free experience</li>
              <li>✓ Unlimited daily challenges</li>
              <li>✓ Exclusive game modes</li>
              <li>✓ Premium rewards and cosmetics</li>
              <li>✓ Early access to new features</li>
              <li>✓ 24/7 priority support</li>
            </ul>
            <button className="premium-button">Upgrade Now - $4.99/month</button>
          </div>
          <div className="premium-info">
            <p>Enjoy NumFlash to its fullest with our Premium subscription.</p>
            <p>7-day free trial available for new subscribers.</p>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="download-cta">
        <h2>Ready to Play?</h2>
        <p>Join millions of players and challenge your mind today</p>
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="large-download-button">
          Download NumFlash on Google Play
        </a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Askala Games</h4>
            <p>Creating exceptional gaming experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
                  Back to Home
                </button>
              </li>
              <li><a href="#about">About</a></li>
              <li>
                <button onClick={() => pindahHalaman(PablikObject.alamatDasarRouter + PablikObject.alamatNumFlash + '/' + PablikObject.alamatPrivacy)}>
                  Privacy Policy
                </button>
              </li>
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
