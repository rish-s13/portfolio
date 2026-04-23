import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Ambient background blobs */}
      <div className="hero__blob hero__blob--a" />
      <div className="hero__blob hero__blob--b" />

      <div className="container">
        <div className="hero__inner">
          <p className="hero__eyebrow">Product Designer</p>

          <h1 className="hero__headline">
            I design systems that make{' '}
            <span className="grad-text">complex decisions</span>{' '}
            easier.
          </h1>

          <p className="hero__sub">
            I design products where clarity is critical — translating complex, multi-layered information into structured interfaces that support clear, confident decision-making.
          </p>

          <p className="hero__sub">
            My work focuses on information architecture, interaction design, and reducing cognitive load in systems where users need to interpret, evaluate, and act quickly.
          </p>

          <div className="hero__contact">
            <a href="mailto:senapatirishit@gmail.com" className="hero__contact-link">
              senapatirishit@gmail.com
            </a>
            <span className="hero__contact-sep" />
            <span className="hero__contact-item">Hyderabad, India</span>
            <span className="hero__contact-sep" />
            <span className="hero__contact-badge">Available Immediately</span>
          </div>
        </div>

        <div className="grad-line hero__divider" />
      </div>
    </section>
  )
}
