import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServicesSEO from './pages/ServicesSEO.jsx'
import Industries from './pages/Industries.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import FAQ from './pages/FAQ.jsx'
import HealthcareNews from './pages/HealthcareNews.jsx'
import Automation from './pages/Automation.jsx'
import About from './pages/About.jsx'
import HtmlFilePage from './components/HtmlFilePage.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo-local-search" element={<ServicesSEO />} />
          <Route path="/services/google-ads" element={<HtmlFilePage filePath="/source-pages/services-google-ads.html" fallbackTitle="Google Ads — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/social-media-marketing" element={<HtmlFilePage filePath="/source-pages/services-social-media-marketing.html" fallbackTitle="Social Media Marketing — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/website-design-dev" element={<HtmlFilePage filePath="/source-pages/services-website-design-dev.html" fallbackTitle="Website Design & Development — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/email-drip-campaigns" element={<HtmlFilePage filePath="/source-pages/services-email-drip-campaigns.html" fallbackTitle="Email Drip Campaigns — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/content-copywriting" element={<HtmlFilePage filePath="/source-pages/services-content-copywriting.html" fallbackTitle="Content & Copywriting — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/google-business-profile" element={<HtmlFilePage filePath="/source-pages/services-google-business-profile.html" fallbackTitle="Google Business Profile — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/analytics-reporting" element={<HtmlFilePage filePath="/source-pages/services-analytics-reporting.html" fallbackTitle="Analytics & Reporting — TheNextGen Healthcare Marketing" />} />
          <Route path="/services/brand-identity-design" element={<HtmlFilePage filePath="/source-pages/services-brand-identity-design.html" fallbackTitle="Brand Identity Design — TheNextGen Healthcare Marketing" />} />
          <Route path="/seo-guide" element={<HtmlFilePage filePath="/source-pages/seo-guide.html" fallbackTitle="SEO Guide — TheNextGen Healthcare Marketing" />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resources/case-studies" element={<CaseStudies />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/healthcare-news" element={<HealthcareNews />} />
          <Route path="/resources/automation" element={<Automation />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
