import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Achievements from './pages/Achievements'
import Publications from './pages/Publications'
import Projects from './pages/Projects'
import Service from './pages/Service'
import Media from './pages/Media'
import Certificates from './pages/Certificates'
import Timeline from './pages/Timeline'
import Contact from './pages/Contact'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/achievements/:id" element={<DetailPage />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:id" element={<DetailPage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<DetailPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:id" element={<DetailPage />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/:id" element={<DetailPage />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/certificates/:id" element={<DetailPage />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/contact" element={<Contact />} />
          {/* Dynamic routes for detail pages */}
          <Route path="/:category/:id" element={<DetailPage />} />
          {/* Catch all route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App