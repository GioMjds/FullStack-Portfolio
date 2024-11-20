import Resume from "../assets/Gio Majadas - Resume.pdf";
import Me from "../assets/mimic4.jpg";
import { techImages } from "../components/Images";
import Marquee from "../components/Marquee";
import TechStacks from "../components/TechStacks";
import "../scss/about.scss";

const About = () => {
  return (
    <>
      <section className="about container section" id='about'>
        <h2 className="section-title" data-aos="fade-right">About Me</h2>

        <div className="about-container grid">
          <img src={Me} alt="" className='about-img home-img' />

          <div className="about-data grid">

            <div className="about-info">
              <p className="about-description">As a student whose having a interest in Web Design, I&apos;m driven to build beautiful and functional websites that captivates users. I&apos;m passionate about creating, engaging and intuitive user experiences. I&apos;m also a quick learner and can work well in a team setting, and constantly expanding my knowledge to stay ahead of the curve.</p>
              <p className="about-description">Staying up to date with the latest technologies and trends in the industry is what really motivates me to keep learning and growing as a developer. I&apos;m always looking for new challenges and opportunities to improve my skills and knowledge.</p>
              <a href={Resume} className="btn" target="_blank">Download My Resume</a>
            </div>

          </div>
        </div>

        <TechStacks />
      </section>
      <Marquee items={techImages} direction='right' />
    </>
  )
}

export default About