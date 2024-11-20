import '../scss/contact.scss';
import { motion } from 'framer-motion'
import { useState } from "react";

const Contact = () => {
  const [focus, setFocus] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const handleFocus = field => setFocus({ ...focus, [field]: true });
  
  const handleBlur = field => setFocus({ ...focus, [field]: false });

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section-title" data-aos="fade-right">How to Contact Me?</h2>

      <div className="contact-container grid">
        <div className="contact-info">
          <h3 className="contact-title">Let&apos;s talk about business!</h3>
          <p className="contact-details">Don&apos;t like forms? Send me an Email 👋</p>
        </div>

        <form method="POST" className="contact-form">
          <div className="contact-form-group">
            <div className="contact-form-div">
              <motion.input
                type="text"
                id="name"
                className="contact-form-input"
                required placeholder="Your Name"
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                animate={{ 
                  scale: focus.name ? 1.05 : 1,
                }}
              />
            </div>

            <div className="contact-form-div">
              <motion.input
                type="email"
                id="email"
                className="contact-form-input"
                required placeholder="Your Email"
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                animate={{
                  scale: focus.email ? 1.05 : 1,
                }}
              />
            </div>
          </div>

            <div className="contact-form-div contact-form-area">
              <motion.input
                type="text"
                className="contact-form-input"
                required placeholder="Your Subject" 
                onFocus={() => handleFocus('subject')}
                onBlur={() => handleBlur('subject')}
                animate={{
                  scale: focus.subject ? 1.05 : 1,
                }}
              />
            </div>

            <div className="contact-form-div">
              <motion.textarea
                id="message"
                cols="30"
                rows="10"
                className="contact-form-input"
                placeholder="Write your message"
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                animate={{
                  scale: focus.message ? 1.05 : 1,
                }}
              ></motion.textarea>
            </div>
            <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact