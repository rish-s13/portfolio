import { useEffect, useRef, useState } from 'react'
import './FeaturedProject.css'

export default function FeaturedProject() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="featured" id="work" ref={ref}>
      <div className="container">
        <div className={`featured__header ${visible ? 'reveal' : ''}`}>
          <p className="section-label">Featured Project</p>
        </div>

        <div className="featured__body">
          <span className={`featured__num grad-text-diag ${visible ? 'reveal delay-1' : ''}`}>
            01
          </span>

          <div className={`featured__main ${visible ? 'reveal delay-2' : ''}`}>
            <div className="featured__title-row">
              <h2 className="featured__title">PitchPerfect</h2>
              <span className="featured__tag">AI Idea Validation Engine</span>
            </div>

            <p className="featured__one-liner">
              A system designed to help founders evaluate ideas through structured,
              decision-oriented analysis — turning complex outputs into clear,
              actionable insights.
            </p>

            <div className="featured__points">
              {[
                'Designed a guided validation flow across five decision dimensions',
                'Translated complex outputs into clear, scannable insights',
                'Built a radar-based scoring system for rapid interpretation',
                'Led the full design process from problem framing to iteration',
              ].map((pt, i) => (
                <div
                  key={i}
                  className={`featured__point ${visible ? `reveal delay-${i + 3}` : ''}`}
                >
                  <span className="featured__point-marker" />
                  <span>{pt}</span>
                </div>
              ))}
            </div>

            <div className={`featured__actions ${visible ? 'reveal delay-7' : ''}`}>
              <a
                href="https://titanium-menu-6cc.notion.site/Pitch-Perfect-The-AI-Investor-Suite-3405e51a3ce2807fafa4e1522bd711ef?pvs=74"
                target="_blank"
                rel="noopener noreferrer"
                className="featured__btn featured__btn--primary"
              >
                Case Study
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://www.figma.com/proto/W8uZ9vGoh0oBtp5BYoUicM/PitchPerfect?node-id=18-834&page-id=18%3A608&starting-point-node-id=18%3A834&t=P6qtXpkuwH9EmYx9-1"
                target="_blank"
                rel="noopener noreferrer"
                className="featured__btn featured__btn--secondary"
              >
                Prototype
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <a
                href="https://pitch-perfect-mb3m.onrender.com/"  // ← PUT YOUR DEPLOYED LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="featured__btn featured__btn--secondary"
              >
                Live Website
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
