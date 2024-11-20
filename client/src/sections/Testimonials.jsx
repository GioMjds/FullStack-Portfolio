import '../scss/testimonials.scss';
import { motion } from 'framer-motion';
import T1 from '../assets/testimonials/t1.jpg';

const testimonialsData = [
  {
    id: 1,
    text: "His design services are top-notch, I highly recommend him!",
    author: "Lean Kurt Escano",
    img: T1
  },
  {
    id: 2,
    text: "Amazing experience, highly recommend!",
    author: "Jane Smith",
    img: T1
  },
  {
    id: 3,
    text: "A fantastic product, will use again!",
    author: "Bob Johnson",
    img: T1
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="testimonials container section" id="testimonials">
        <h2 className="section-title" data-aos="fade-right">Testimonials</h2>
        <div className="testimonial-grid">
          {testimonialsData.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-item"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="testimonial-content">
                <img src={testimonial.img} alt={testimonial.author} className='testimonial-image' />
                <div className="testimonial-text-container">
                  <h4 className="testimonial-author">{testimonial.author}</h4>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Testimonials