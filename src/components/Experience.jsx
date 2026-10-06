import { useEffect, useRef, useState } from 'react'
import './Experience.css'

export default function Experience() {
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
    <section className="experience" id="experience" ref={ref}>
      <div className="container">

        <div className={`experience__header ${visible ? 'reveal' : ''}`}>
          <p className="section-label">Experience</p>
        </div>

        <div className="experience__body">

          <span
            className={`experience__num grad-text-diag ${
              visible ? 'reveal delay-1' : ''
            }`}
          >
            01
          </span>

          <div
            className={`experience__main ${
              visible ? 'reveal delay-2' : ''
            }`}
          >

            <div className="experience__title-row">
              <h2 className="experience__title">Hurt 2 Heal</h2>

              <span className="experience__tag">
                Lead Product Designer & Developer
              </span>
            </div>

            <p className="experience__meta">
              Aug 2026 – Oct 2026 · Independent Client Engagement · Figma · Squarespace
            </p>

            <p className="experience__one-liner">
              Led the end-to-end design and implementation of a nonprofit
              digital platform, translating stakeholder requirements into a
              cohesive, safety-focused experience from Figma through
              production and client handoff.
            </p>

            <div className="experience__points">

              {[
                'Led the end-to-end product design process, from stakeholder requirements and information architecture through four rounds of Figma iteration and client approval',

                'Designed a seven-page, mobile-first experience focused on accessible support, safety, storytelling, and culturally representative visual direction',

                'Translated the approved design into a responsive Squarespace website, adapting layouts and components for production through custom CSS and CMS structures',

                'Implemented Amazon Associates monetization, Zeffy donations, YouTube content, QR pathways, and a maintainable catalog structure for ongoing client management',

                'Created project documentation and client handoff materials covering the design process, integrations, content management, and post-launch workflows',
              ].map((pt, i) => (
                <div
                  key={i}
                  className={`experience__point ${
                    visible ? `reveal delay-${i + 3}` : ''
                  }`}
                >
                  <span className="experience__point-marker" />
                  <span>{pt}</span>
                </div>
              ))}

            </div>

            <div
              className={`experience__actions ${
                visible ? 'reveal delay-8' : ''
              }`}
            >

              <a
                href="https://www.hurt2heal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="experience__btn experience__btn--primary"
              >
                Live Website

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="https://titanium-menu-6cc.notion.site/Hurt-2-Heal-H2H-Case-Study-Project-Documentation-3af5e51a3ce2807d9373f45391c18d00?pvs=74"
                target="_blank"
                rel="noopener noreferrer"
                className="experience__btn experience__btn--secondary"
              >
                Documentation

                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M2.5 11.5L11.5 2.5M11.5 2.5H5.5M11.5 2.5V8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}