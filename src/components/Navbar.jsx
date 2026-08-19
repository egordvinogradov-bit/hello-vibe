import { useEffect, useId, useState } from 'react'
import { navLinks, site } from '../data/content'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <nav
      className={`navbar${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}
      aria-label="Primary"
    >
      <a className="navbar-logo" href="#top" onClick={closeMenu}>
        {site.name}
      </a>

      <button
        type="button"
        className="navbar-toggle"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        <span className="visually-hidden">
          {open ? 'Close menu' : 'Open menu'}
        </span>
        <span className="navbar-toggle-bar" aria-hidden="true" />
        <span className="navbar-toggle-bar" aria-hidden="true" />
      </button>

      <div className="navbar-menu" id={menuId}>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className={
                  link.href === '#explore' ? 'navbar-link navbar-link-cta' : 'navbar-link'
                }
                href={link.href}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
