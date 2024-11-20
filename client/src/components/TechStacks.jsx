import { motion } from "framer-motion";

const techStacks = [
  { name: "HTML", percentage: 62, color: "hsl(18, 88%, 55%)", },
  { name: "CSS", percentage: 59, color: "rgb(81, 163, 220)", },
  { name: "JavaScript", percentage: 51, color: "rgb(247, 223, 30)", },
  { name: "Python", percentage: 55, color: "rgb(255, 193, 7)", },
  { name: "React", percentage: 55, color: "rgb(0, 216, 255)", },
  { name: "MySQL", percentage: 47, color: "rgb(106, 126, 145)", },
  { name: "PHP", percentage: 45, color: "hsl(236, 28%, 60%)", },
  { name: "SASS", percentage: 41, color: "rgb(207, 100, 154)",},
  { name: "TypeScript", percentage: 42, color: "rgb(47, 116, 192)", },
  { name: "Tailwind CSS", percentage: 37, color: "hsl(198, 86%, 58%)", },
  { name: "Framer Motion", percentage: 48, color: "hsl(57, 90%, 51%)",},
];

const TechStacks = () => {
  return (
    <section className="about container section">
      <h2 className="section-title" data-aos="fade-right">Tech Stacks</h2>
      <div className="tech-stacks grid">
        {techStacks.map((tech, index) => (
          <motion.div
            className="tech-stack"
            key={index}
            whileHover={{ scale: 1.07, rotate: 2.5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="tech-stack-title">
              <h3 className="tech-stack-name">{tech.name}</h3>
              <span className="tech-stack-number">{tech.percentage}%</span>
            </div>

            <div className="tech-stack-bar">
              <span
                className="tech-stack-percentage"
                style={{
                  width: `${tech.percentage}%`,
                  backgroundColor: `${tech.color}`
                }}
              >
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStacks