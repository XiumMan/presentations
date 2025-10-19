import { motion } from 'framer-motion';

const Home = ({ onSelectPresentation }) => {
  const presentations = [
    {
      id: 1,
      title: "Hand Hygiene Audit IPC Week 2025",
      description: "Competition results and winner announcement",
      slides: 4
    },
    {
      id: 2,
      title: "Hand Hygiene & HAIs Baseline Audit 2025",
      description: "Comprehensive baseline audit analysis",
      slides: 0,
      disabled: true
    }
  ];

  return (
    <div className="home-container">
      <motion.h1
        className="home-title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        IPC Presentations 2025
      </motion.h1>
      <motion.p
        className="home-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Select a presentation to begin
      </motion.p>
      <div className="presentations-grid">
        {presentations.map((presentation, index) => (
          <motion.div
            key={presentation.id}
            className={`presentation-card ${presentation.disabled ? 'disabled' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={!presentation.disabled ? { scale: 1.05 } : {}}
            onClick={() => !presentation.disabled && onSelectPresentation(presentation.id)}
            style={{
              opacity: presentation.disabled ? 0.6 : 1,
              cursor: presentation.disabled ? 'not-allowed' : 'pointer'
            }}
          >
            <h2>{presentation.title}</h2>
            <p>{presentation.description}</p>
            <div className="slides-count">
              {presentation.disabled ? 'Coming Soon' : `${presentation.slides} slides`}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
