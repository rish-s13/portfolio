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
              href="https://drive.google.com/file/d/1tqwYPc-5cfzfOJ5ow8lkYq7D9vT60EwL/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link footer__link--accent"
            >
              Resume ↓
            </a>
          </div>
        </div>

        <p className="footer__copy">
          Designed and built by Rishit Senapati · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}
