import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="grad-line footer__top-line" />
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <p className="footer__name">Rishit Senapati</p>
            <p className="footer__location">Hyderabad, India</p>
          </div>

          <div className="footer__right">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', gap: '28px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a href="mailto:senapatirishit@gmail.com" className="footer__link">
                  senapatirishit@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/rishit-senapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://drive.google.com/file/d/1Wg0nkIPfwoXJMXejR-rO5mbp9MB7ElOG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link footer__link--accent"
                >
                  Resume ↓
                </a>
              </div>

              <span
                style={{
                  fontSize: '0.7rem',
                  color: 'rgba(136, 136, 128, 0.5)',
                  letterSpacing: '0.01em',
                }}
              >
                *Inquiries via Upwork? Please reach out directly through the Upwork platform to comply with ToS.
              </span>
            </div>
          </div>
        </div>

        <p className="footer__copy">
          Designed and built by Rishit Senapati · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}