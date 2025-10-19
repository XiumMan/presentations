import { motion } from 'framer-motion';

const ContentSlide = ({ slide }) => {
  return (
    <div className="content-slide">
      <div className="slide-content">
        <motion.div
          className="content-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>{slide.title}</h2>

          {slide.content.map((item, index) => {
            if (item.type === 'paragraph') {
              return (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.text}
                </motion.p>
              );
            }

            if (item.type === 'heading') {
              return (
                <motion.div
                  key={index}
                  className="content-heading"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.text}
                </motion.div>
              );
            }

            if (item.type === 'bullet') {
              return (
                <motion.ul
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {item.items.map((bulletItem, bulletIndex) => (
                    <motion.li
                      key={bulletIndex}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (index * 0.08) + (bulletIndex * 0.04) }}
                    >
                      {bulletItem}
                    </motion.li>
                  ))}
                </motion.ul>
              );
            }

            return null;
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default ContentSlide;
