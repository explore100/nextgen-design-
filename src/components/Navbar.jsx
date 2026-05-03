import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logoData from '../assets/logoData.js'

const RESOURCES_LINKS = [
  { to: '/resources/case-studies', label: 'Case Studies' },
  { to: '/resources/faq', label: 'FAQ' },
  { to: '/resources/healthcare-news', label: 'Healthcare News' },
  { to: '/resources/automation', label: 'Automation' },
  { to: '/blog', label: 'Blog' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <div className="container">
        <nav className="nav" aria-label="Primary">
          <Link className="logo" to="/" aria-label="TheNextGen Healthcare Marketing — Home">
            <img src={logoData} alt="TheNextGen Healthcare Marketing" />
          </Link>

          <div className="menu" role="menubar">
            <NavLink to="/services" role="menuitem">Services</NavLink>
            <NavLink to="/industries" role="menuitem">Industries</NavLink>
            <NavLink to="/about" role="menuitem">About</NavLink>
            <NavLink to="/contact" role="menuitem">Contact Us</NavLink>

            <div style={{ position: 'relative' }}>
              <button
                className={`menu-link${resourcesOpen ? ' is-active' : ''}`}
                role="menuitem"
                aria-haspopup="true"
                aria-expanded={resourcesOpen}
                onClick={() => setResourcesOpen(o => !o)}
                onBlur={() => setTimeout(() => setResourcesOpen(false), 150)}
              >
                Resources
                <svg
                  className="chev"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  style={{ transform: resourcesOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {resourcesOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(255,255,255,.96)',
                    backdropFilter: 'blur(14px)',
                    border: '1px solid var(--line-soft)',
                    borderRadius: '12px',
                    boxShadow: '0 16px 40px -16px rgba(45,55,72,.2)',
                    padding: '8px',
                    minWidth: '200px',
                    zIndex: 100,
                  }}
                >
                  {RESOURCES_LINKS.map(link => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setResourcesOpen(false)}
                      style={{
                        display: 'block',
                        padding: '9px 14px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'var(--body)',
                        transition: 'background .15s, color .15s',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(179,139,109,.07)'; e.currentTarget.style.color = 'var(--heading)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.color = 'var(--body)' }}
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="nav-right">
            <button className="lang" aria-label="Change language">
              <svg
                className="globe"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              EN
              <svg
                className="chev"
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            <button className="icon-btn" aria-label="Account">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>

            <button
              className="mobile-menu-btn"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(o => !o)}
            >
              {mobileOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        <nav className={`mobile-nav${mobileOpen ? ' is-open' : ''}`} aria-label="Mobile navigation">
          <NavLink to="/services" onClick={() => setMobileOpen(false)}>Services</NavLink>
          <NavLink to="/industries" onClick={() => setMobileOpen(false)}>Industries</NavLink>
          <NavLink to="/about" onClick={() => setMobileOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setMobileOpen(false)}>Contact Us</NavLink>
          {RESOURCES_LINKS.map(link => (
            <NavLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)} style={{ paddingLeft: '28px' }}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
