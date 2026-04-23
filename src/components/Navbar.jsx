import { useState, useEffect } from 'react'
import './Navbar.css'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Resume', href: 'https://drive.google.com/file/d/1tqwYPc-5cfzfOJ5ow8lkYq7D9vT60EwL/view?usp=drive_link', external: true },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/rishit-senapati', external: true },
]

export default function Navbar() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['work', 'about']
      for (const id of sections) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom > 120) {
          setActive(id)
          return
        }
      }
      setActive('')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" onClick={(e) => scrollTo(e, '#')}>
          Rishit Senapati
        </a>
        <ul className="navbar__links">
          {links.map(({ label, href, external }) => (
            <li key={label}>
              <a
                href={href}
                className={`navbar__link ${active === href.replace('#', '') ? 'navbar__link--active' : ''}`}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                onClick={external ? undefined : (e) => scrollTo(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
