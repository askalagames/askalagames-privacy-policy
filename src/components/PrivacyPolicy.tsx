import { useNavigate } from 'react-router-dom'
import '../styles/PrivacyPolicy.css'
import * as PablikObject from '../pablikObjek'
import askalaLogo from '../assets/askala-games-logo.png'

export default function PrivacyPolicy() {
  const nav = useNavigate()

  const pindahHalaman = (hal: string) => {
    nav(hal)
  }

  return (
    <div className="privacy-container">
      <header className="privacy-header">
        <button className="back-button" onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
          ← Back to Home
        </button>
        <div className="privacy-brand" onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
          <img src={askalaLogo} alt="Askala Games Logo" className="header-logo" />
          <span className="brand-name">Askala Games</span>
        </div>
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: May 27, 2026</p>
      </header>

      <div className="privacy-content">
        <nav className="table-of-contents">
          <h3>Table of Contents</h3>
          <ul>
            <li><a href="#intro">Introduction</a></li>
            <li><a href="#information">1. Information We Collect</a></li>
            <li><a href="#google-auth">2. Google Account & Auth</a></li>
            <li><a href="#subscriptions">3. Subscriptions & Purchases</a></li>
            <li><a href="#advertising">4. Advertising</a></li>
            <li><a href="#analytics">5. Analytics</a></li>
            <li><a href="#children">6. Children's Privacy</a></li>
            <li><a href="#data-rights">7. Data Rights & Preferences</a></li>
            <li><a href="#security">8. Data Security</a></li>
            <li><a href="#third-party">9. Third-Party Services</a></li>
            <li><a href="#changes">10. Policy Changes</a></li>
            <li><a href="#contact">11. Contact Us</a></li>
            <li><a href="#legal">12. Legal Compliance</a></li>
          </ul>
        </nav>

        <main className="policy-body">
          <section id="intro" className="policy-section">
            <h2>Introduction</h2>
            <p>
              Welcome to NumFlash, developed by Askala Games ("we", "our", or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our platform.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and related services. Please read this policy carefully. If you do not agree with our policies and practices, please do not use our application.
            </p>
          </section>

          <section id="information" className="policy-section">
            <h2>1. Information We Collect</h2>

            <h3>a. Automatically Collected Information</h3>
            <p>When you use the app, certain information may be collected automatically through third-party services, including:</p>
            <ul className="info-list">
              <li><strong>Device Information:</strong> Device model, manufacturer, and unique device identifiers</li>
              <li><strong>Operating System:</strong> OS version, build number, and system language</li>
              <li><strong>App Usage Statistics:</strong> Features used, frequency of use, and gameplay patterns</li>
              <li><strong>Crash Reports and Diagnostics:</strong> Error logs and performance data to improve stability</li>
              <li><strong>Advertising Identifiers:</strong> Google Advertising ID for personalized advertising</li>
              <li><strong>Subscription and Purchase Status:</strong> Information about active subscriptions and in-app purchases</li>
              <li><strong>Approximate Location Information:</strong> Derived from IP address or device settings (not precise GPS)</li>
            </ul>

            <h3>b. Information You Provide</h3>
            <ul className="info-list">
              <li>Account credentials (email address when using Google authentication)</li>
              <li>Game progress and achievements</li>
              <li>Leaderboard names and rankings</li>
              <li>Optional feedback or support inquiries</li>
            </ul>
          </section>

          <section id="google-auth" className="policy-section">
            <h2>2. Google Account & Authentication</h2>
            <p>
              NumFlash may use Firebase Authentication to authenticate users using their Google account. This secure authentication method helps us:
            </p>
            <ul className="info-list">
              <li>Restore subscriptions and purchases across devices</li>
              <li>Synchronize premium access automatically</li>
              <li>Improve account reliability across device reinstallations</li>
              <li>Provide seamless login experiences</li>
            </ul>
            <p>
              <strong>Important:</strong> We do not access your Google password. Authentication is handled securely by Google's Firebase service. We only receive your email address and basic profile information necessary for account management.
            </p>
          </section>

          <section id="subscriptions" className="policy-section">
            <h2>3. Subscriptions & Purchases</h2>
            <p>
              NumFlash offers subscriptions and in-app purchases through Google Play Billing. Our payment processing is handled entirely by Google:
            </p>
            <ul className="info-list">
              <li>All payments are processed securely by Google Play</li>
              <li>We do not directly collect or store your payment card information</li>
              <li>Purchase information such as subscription status is processed to provide premium features</li>
              <li>Transaction history is available in your Google Play Account</li>
              <li>Refund policies are governed by Google Play's policies</li>
            </ul>
            <p>
              You can manage your subscriptions and billing information directly through your Google Play Account settings.
            </p>
          </section>

          <section id="advertising" className="policy-section">
            <h2>4. Advertising</h2>
            <p>
              NumFlash uses Google AdMob to display banner and rewarded advertisements. AdMob may collect and use certain data, including:
            </p>
            <ul className="info-list">
              <li>Device identifiers and advertising IDs</li>
              <li>App interaction data and user behavior</li>
              <li>Approximate location data (derived from IP or settings)</li>
              <li>Demographics and interests for ad personalization</li>
            </ul>
            <p>
              This information helps provide and improve advertising services. For more information about how Google uses this data, please visit:
            </p>
            <p>
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>
            </p>
            <p>
              You can control personalized ads through your device's advertising settings or by opting out through Google's advertising settings.
            </p>
          </section>

          <section id="analytics" className="policy-section">
            <h2>5. Analytics</h2>
            <p>
              NumFlash uses Firebase Analytics to understand app usage patterns and continuously improve the user experience. Analytics information collected includes:
            </p>
            <ul className="info-list">
              <li><strong>Session Information:</strong> Duration, frequency, and timing of app usage</li>
              <li><strong>Gameplay Interactions:</strong> Features accessed, game modes played, progression data</li>
              <li><strong>Feature Usage:</strong> Which features are most popular and which need improvement</li>
              <li><strong>Device Information:</strong> Device model, OS version, app version</li>
              <li><strong>App Performance Data:</strong> Load times, crash rates, and performance metrics</li>
            </ul>
            <p>
              This information is collected in aggregated, anonymized form and is not intended to personally identify individual users. We use this data solely to enhance app performance and develop better features.
            </p>
          </section>

          <section id="children" className="policy-section">
            <h2>6. Children's Privacy</h2>
            <p>
              NumFlash is designed for users of all ages. We are committed to protecting children's privacy:
            </p>
            <ul className="info-list">
              <li>We do not knowingly collect personal information from children beyond what is automatically collected by third-party services</li>
              <li>We do not request or store children's names, addresses, or contact information</li>
              <li>All third-party services used (Firebase, AdMob, Google) comply with applicable children's privacy laws</li>
              <li>Parents or guardians who believe that a child has provided personal information may contact us immediately</li>
            </ul>
            <p>
              If you are under 13 years old, we recommend playing with parental consent and supervision. For COPPA (Children's Online Privacy Protection Act) compliance, we encourage parents to monitor app usage and privacy settings.
            </p>
          </section>

          <section id="data-rights" className="policy-section">
            <h2>7. Your Data Rights & Preferences</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal data:
            </p>
            <ul className="info-list">
              <li><strong>Access:</strong> Request information about what data we hold about you</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your data (subject to legal obligations)</li>
              <li><strong>Opt-out:</strong> Opt out of personalized advertising or analytics</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the contact information provided below.
            </p>
          </section>

          <section id="security" className="policy-section">
            <h2>8. Data Security</h2>
            <p>
              We implement comprehensive security measures to protect your information:
            </p>
            <ul className="info-list">
              <li>All data transmission uses SSL/TLS encryption</li>
              <li>Firebase security features protect against unauthorized access</li>
              <li>Regular security audits and updates</li>
              <li>Limited employee access to personal data</li>
              <li>Compliance with industry-standard security practices</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security but maintain reasonable safeguards.
            </p>
          </section>

          <section id="third-party" className="policy-section">
            <h2>9. Third-Party Services</h2>
            <p>
              NumFlash integrates the following third-party services, each with their own privacy policies:
            </p>
            <ul className="info-list">
              <li><strong>Google Firebase:</strong> Authentication, Analytics, Cloud Storage</li>
              <li><strong>Google AdMob:</strong> Advertising services</li>
              <li><strong>Google Play Billing:</strong> In-app purchases and subscriptions</li>
            </ul>
            <p>
              We are not responsible for these third-party services' privacy practices. We encourage you to review their privacy policies independently.
            </p>
          </section>

          <section id="changes" className="policy-section">
            <h2>10. Policy Changes</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices, technology, laws, and other factors. We will notify users of material changes by:
            </p>
            <ul className="info-list">
              <li>Posting the updated policy within the app</li>
              <li>Updating the "Last Updated" date at the top of this policy</li>
              <li>Requiring explicit consent for major changes (where applicable)</li>
            </ul>
            <p>
              Continued use of NumFlash after policy changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section id="contact" className="policy-section">
            <h2>11. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="contact-info">
              <p>
                <strong>Askala Games</strong><br />
                Email: <a href="mailto:privacy@askalagames.com">privacy@askalagames.com</a><br />
                Website: <a href="https://askala-games.web.app/" target="_blank" rel="noopener noreferrer">askala-games.web.app</a><br />
              </p>
            </div>
            <p>
              We will respond to privacy inquiries within 30 days.
            </p>
          </section>

          <section id="legal" className="policy-section legal-notice">
            <h2>12. Legal Compliance</h2>
            <p>
              This Privacy Policy complies with applicable regulations including GDPR, CCPA, and other regional privacy laws. For California residents, <a href="#">click here</a> for additional privacy rights information.
            </p>
          </section>
        </main>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Askala Games</h4>
            <p>Creating exceptional gaming experiences.</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><button onClick={() => pindahHalaman(PablikObject.alamatDasarRouter)}>
                Back to Home
              </button></li>
              <li><a href="#games">Games</a></li>
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
