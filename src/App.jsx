import { Box } from '@chakra-ui/react'
import HeroSection from './components/HeroSection'
import TechStackSlider from './components/TechStackSlider'
import AboutSection from './components/AboutSection'
import BlogSection from './components/BlogSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'

function App() {
  return (
    <Box className="min-h-screen bg-[#1E1E1E] text-[#F8F8F2]">
      <Box className="max-w-5xl mx-auto px-4 py-12 space-y-24">
        <HeroSection />
        <TechStackSlider />
        <AboutSection />
        <BlogSection />
        <ProjectsSection />
        <Footer />
      </Box>
    </Box>
  )
}

export default App
