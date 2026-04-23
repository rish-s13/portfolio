import './About.css'

const skills = {
  Design: [
    'UX Research', 'Information Architecture', 'Interaction Design',
    'Behavioural Design', 'User Flows', 'Wireframing', 'Prototyping',
    'Cognitive Load Reduction', 'Progressive Disclosure',
  ],
  Product: [
    'Product Thinking', 'Problem Framing', 'Decision Systems',
    'Usability Thinking', 'Iteration', 'Metrics Thinking',
  ],
  Tools: ['Figma', 'Notion', 'Webflow'],
}

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about__layout">
          {/* Left: label */}
          <div className="about__label-col">
            <p className="section-label">About</p>
          </div>

          {/* Right: content */}
          <div className="about__content">
          <p className="about__summary">
            Product Designer with experience shaping complex, system-driven products — from research and UX architecture through interaction design and iteration.
          </p>

          <p className="about__summary about__summary--muted">
            I focus on structuring information, defining decision flows, and translating complex systems into clear, low-friction experiences that support confident user decisions.
          </p>

            <div className="about__skills">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="about__skill-group">
                  <p className="about__skill-category">{category}</p>
                  <div className="about__skill-tags">
                    {items.map((s) => (
                      <span key={s} className="about__skill-tag">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
