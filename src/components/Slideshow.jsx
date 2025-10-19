import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { presentation1Data } from '../data/presentation1Data';
import TitleSlide from './slides/TitleSlide';
import ContentSlide from './slides/ContentSlide';
import ChartSlide from './slides/ChartSlide';
import WinnerSlide from './slides/WinnerSlide';

const Slideshow = ({ presentationId, onBack }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef(null);
  const data = presentation1Data;
  const slides = data.slides;

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') {
        if (document.fullscreenElement) {
          exitFullscreen();
        } else {
          onBack();
        }
      }
      if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  const renderSlide = (slide) => {
    switch (slide.type) {
      case 'title':
        return <TitleSlide slide={slide} />;
      case 'content':
        return <ContentSlide slide={slide} />;
      case 'chart':
        return <ChartSlide slide={slide} />;
      case 'winner':
        return <WinnerSlide slide={slide} />;
      default:
        return null;
    }
  };

  return (
    <div className="slideshow-container" ref={containerRef}>
      {/* Top Navigation Bar */}
      <div className="top-nav">
        <div className="nav-left">
          <button
            className="nav-button home-button"
            onClick={onBack}
          >
            🏠 Home
          </button>
          <button
            className="nav-button fullscreen-button"
            onClick={toggleFullscreen}
            title="Press F to toggle fullscreen"
          >
            {isFullscreen ? '⊗' : '⛶'} {isFullscreen ? 'Exit' : 'Fullscreen'}
          </button>
        </div>

        <div className="nav-center">
          <button
            className="nav-button"
            onClick={prevSlide}
            disabled={currentSlide === 0}
          >
            ← Prev
          </button>
          <span className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </span>
          <button
            className="nav-button"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
          >
            Next →
          </button>
        </div>

        <div className="nav-right">
          {/* Placeholder for balance */}
        </div>
      </div>

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="slide"
        >
          {renderSlide(slides[currentSlide])}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Slideshow;
