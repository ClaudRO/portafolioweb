import React, { useState, useEffect } from 'react';
import image1 from '../assets/statics/sica/sicaapp (1).png';
import image2 from '../assets/statics/sica/sicaapp (2).png';
import image3 from '../assets/statics/sica/sicaapp (3).png';
import image4 from '../assets/statics/sica/sicaapp (4).png';
import image5 from '../assets/statics/sica/sicaapp (5).png';




const SwipeSlide2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image1,image2,image3,image4,image5
  ];

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      // Swipe right
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
    }
  };

  useEffect(() => {
    // Agrega el listener para el teclado cuando el componente se monta
    window.addEventListener('keydown', handleKeyDown);

    // Limpia el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="swipe-container"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {/* Botones de navegación */}
      <button onClick={prevSlide} className="prev-button">Prev</button>
      <button onClick={nextSlide} className="next-button">Next</button>
    </div>
  );
};

export default SwipeSlide2;
