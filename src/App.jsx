import CustomCursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProject from './components/FeaturedProject'
import Work from './components/Work'
import Approach from './components/Approach'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Work />
        <Approach />
      </main>
      <Footer />
    </>
  )
}
