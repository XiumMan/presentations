import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import confetti from 'canvas-confetti';

const WinnerSlide = ({ slide }) => {
  const [revealed, setRevealed] = useState(false);

  const triggerConfetti = () => {
    const duration = 4 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 10000 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#1976d2', '#42a5f5', '#90caf9', '#e3f2fd']
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#1976d2', '#42a5f5', '#90caf9', '#e3f2fd']
      });
    }, 250);
  };

  const handleReveal = () => {
    setRevealed(true);
    setTimeout(() => triggerConfetti(), 500);
  };

  return (
    <div className="winner-slide">
      <div className="slide-content">
        <motion.div
          className="winner-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {slide.title}
          </motion.h2>

          <div className="reveal-section">
            <AnimatePresence mode="wait">
              {!revealed ? (
                <motion.button
                  key="button"
                  className="reveal-button"
                  onClick={handleReveal}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  🏆 Reveal the Winner 🏆
                </motion.button>
              ) : (
                <motion.div
                  key="winner"
                  className="winner-reveal"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="trophy-icon"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.5 }}
                  >
                    🏆
                  </motion.div>

                  <motion.div
                    className="winner-name"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
                  >
                    {slide.winner}
                  </motion.div>

                  <motion.div
                    className="celebration-emojis"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8 }}
                    >
                      🎉
                    </motion.span>
                    <motion.span
                      animate={{ rotate: [0, -15, 15, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8, delay: 0.2 }}
                    >
                      🎊
                    </motion.span>
                    <motion.span
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8, delay: 0.4 }}
                    >
                      🎉
                    </motion.span>
                  </motion.div>

                  <motion.p
                    className="winner-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    Congratulations on achieving the highest hand hygiene compliance rate of 76.6%!
                  </motion.p>

                  <motion.div
                    className="stars"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      ⭐
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                    >
                      ⭐
                    </motion.span>
                    <motion.span
                      animate={{ scale: [1, 1.4, 1] }}
                      transition={{ duration: 1, repeat: Infinity, delay: 0.6 }}
                    >
                      ⭐
                    </motion.span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WinnerSlide;
