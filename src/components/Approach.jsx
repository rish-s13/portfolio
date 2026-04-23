import './Approach.css'

export default function Approach() {
  return (
    <section className="approach">
      <div className="container">
        <div className="approach__inner">
          <div className="approach__left">
            <p className="section-label">Approach</p>
          </div>
          <div className="approach__right">
            <h2 className="approach__headline">
              I design for{' '}
              <span className="grad-text">clarity in complex systems.</span>
            </h2>

            <p className="approach__body">
              My work focuses on structuring information, shaping decision flows, and translating complex outputs into interfaces that are easy to interpret and act on.
            </p>

            <p className="approach__body">
              I prioritize reducing cognitive load through hierarchy, progressive disclosure, and interaction clarity — so users can make better decisions without friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
