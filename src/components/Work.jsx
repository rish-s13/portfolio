import './Work.css'

const projects = [
  {
    num: '02',
    name: 'Glyph',
    tag: 'Personal Knowledge System',
    points: [
      'Location-based retrieval replacing keyword search',
      'Reduced friction across physical-digital workflows',
    ],
    href: 'https://titanium-menu-6cc.notion.site/Glyph-Personal-Knowledge-Ecosystem-for-Physical-Digital-Libraries-32e5e51a3ce2807db422ec4e0a361490',
  },
  {
    num: '03',
    name: 'OxyNEET',
    tag: 'Learning Dashboard',
    points: [
      'Prioritised learning gaps across 19 subjects',
      'Reduced cognitive load through hierarchy',
    ],
    href: 'https://titanium-menu-6cc.notion.site/OxyNEET-NEET-PG-Preparation-Helper-31d5e51a3ce2803787a2c5fcbc924989',
  },
  {
    num: '04',
    name: 'Aura',
    tag: 'Behavioural Wellness System',
    points: [
      'Replaced streak pressure with consistency tracking',
      'Designed low-friction interactions',
    ],
    href: 'https://titanium-menu-6cc.notion.site/Aura-Mental-Wellness-Tool-3255e51a3ce2800c8a18c8187ebb527b',
  },
]

export default function Work() {
  return (
    <section className="work">
      <div className="container">
        <div className="work__header">
          <p className="section-label">Selected Work</p>
        </div>

        <div className="work__list">
          {projects.map((p, i) => (
            <a
              key={p.num}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="work__item"
            >
              <div className="work__item-inner">
                <span className="work__item-num">{p.num}</span>
                <div className="work__item-body">
                  <div className="work__item-top">
                    <h3 className="work__item-name">{p.name}</h3>
                    <span className="work__item-tag">{p.tag}</span>
                  </div>
                  <div className="work__item-points">
                    {p.points.map((pt) => (
                      <span key={pt} className="work__item-point">{pt}</span>
                    ))}
                  </div>
                </div>
                <span className="work__item-arrow">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
              <div className="work__item-line" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
