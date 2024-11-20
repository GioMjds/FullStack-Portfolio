import Me from "../assets/mimic4.jpg";
import HeaderSocials from '../components/HeaderSocials';
import ScrollDown from '../components/ScrollDown';
import { NavLink } from "react-router-dom";
import "../scss/home.scss";

const Home = () => {
  const handleNav = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="home container" id='home'>
      <div className="intro">
        <img src={Me} className="home-img" data-aos="zoom-out" />
        <h1 className="home-name" data-aos="zoom-out">Gio Majadas</h1>
        <span className="home-education" data-aos="zoom-out">Front-End Developer</span>
        <HeaderSocials />
        <NavLink to="/contact" className="btn home-btn" data-aos="zoom-out" onClick={() => handleNav('contact')}>Hire Me</NavLink>
        <ScrollDown />
      </div>
    </section>
  )
}

export default Home