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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/seo-local-search" element={<ServicesSEO />} />
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
