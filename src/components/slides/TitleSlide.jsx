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
      </div>
    </div>
  );
};

export default TitleSlide;
