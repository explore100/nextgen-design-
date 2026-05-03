import { useState } from 'react'
import { Link } from 'react-router-dom'
import logoData from '../assets/logoData.js'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="footer" id="footer" role="contentinfo">
      <div className="container">
        <div className="ft-grid">

          {/* Brand block */}
          <div className="ft-brand">
            <Link to="/" className="ft-logo" aria-label="TheNextGen Healthcare Marketing — Home">
              <img src={logoData} alt="TheNextGen Healthcare Marketing" />
            </Link>
            <p className="ft-desc">
              Full-service healthcare marketing agency. SEO, Google Ads, social media, website design, and HIPAA-compliant automation for clinics.
            </p>
            <div className="ft-social" aria-label="Social media">
              <a href="https://instagram.com/thenextgenhealth" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="https://facebook.com/thenextgenhealth" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com/company/thenextgenhealth" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="ft-col">
            <h4 className="ft-h">Services</h4>
            <ul className="ft-list">
              <li><Link to="/services/seo-local-search">SEO &amp; Local Search</Link></li>
              <li><a href="/services/google-ads">Google Ads</a></li>
              <li><a href="/services/social-media-marketing">Social Media</a></li>
              <li><a href="/services/website-design-dev">Website Design</a></li>
              <li><a href="/services/email-drip-campaigns">Email Campaigns</a></li>
              <li><a href="/services/content-copywriting">Content Marketing</a></li>
              <li><a href="/services/google-business-profile">Google Business Profile</a></li>
              <li><a href="/services/analytics-reporting">Analytics</a></li>
              <li><a href="/services/brand-identity-design">Branding</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="ft-col">
            <h4 className="ft-h">Company</h4>
            <ul className="ft-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resources/faq">FAQ</Link></li>
              <li><a href="/seo-guide">SEO Guide</a></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><a href="/team">Team</a></li>
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="ft-col">
            <h4 className="ft-h">Contact</h4>
            <ul className="ft-list">
              <li>
                <a
                  href="https://www.google.com/maps/place/3001+Skyway+Cir+N,+Irving,+TX+75038"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  3001 Skyway Circle&nbsp;N<br />Irving, TX&nbsp;75038
                </a>
              </li>
              <li><a href="mailto:hello@thenextgenhealth.com">hello@thenextgenhealth.com</a></li>
              <li><a href="tel:+19728481153">+1 (972) 848&ndash;1153</a></li>
            </ul>

            <div className="ft-news">
              <p className="ft-news-h">Get weekly marketing tips</p>
              <p className="ft-news-p">Healthcare growth insights, delivered to your inbox.</p>
              <form
                className="ft-form"
                onSubmit={e => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <button type="submit">
                  Subscribe
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="ft-bottom">
          <span>&copy; 2026 TheNextGen Healthcare Marketing. All rights reserved.</span>
          <div className="ft-bottom-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/sitemap">Sitemap</a>
            <a href="/accessibility">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
