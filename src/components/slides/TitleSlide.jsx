import { motion } from 'framer-motion';

const TitleSlide = ({ slide }) => {
  return (
    <div
      className="title-slide"
      style={{
        backgroundImage: 'url(/title.jpeg)',
        width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="slide-content">
        <motion.div
          className="title-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="logo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img src="/hmh-logo.svg" alt="Hulhumale Hospital Logo" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {slide.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {slide.subtitle}
          </motion.p>

          <motion.div
            style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginTop: '2rem' }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            🧼
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TitleSlide;
