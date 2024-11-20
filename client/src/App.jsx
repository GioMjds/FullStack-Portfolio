import AOS from "aos"
import { BrowserRouter } from "react-router-dom"
import { useMediaQuery } from "react-responsive"
import './App.scss'
import About from "./sections/About"
import Home from "./sections/Home"
import Services from "./sections/Services"
import Sidebar from "./components/Sidebar"
import Resume from "./sections/Resume"
import Portfolio from "./sections/Portfolio"
import Contact from "./sections/Contact"
import Certificates from "./sections/Certificates"

const App = () => {
  AOS.init({
    duration: 600,
    delay: 300,
  });

  const isDesktop = useMediaQuery({ minWidth: 1440 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <BrowserRouter>
      <Sidebar />
      <main className={`main ${isMobile ? "mobile" : ""} ${isTablet ? "tablet" : ""} ${isDesktop ? "desktop" : ""}`}>
        <Home id="home" />
        <About id="about" />
        <Services id="services" />
        <Resume id="resume" />
        <Certificates id="certificates" />
        <Portfolio id="portfolio" />
        <Contact id="contact" />
      </main>
    </BrowserRouter>
  )
}

export default App
