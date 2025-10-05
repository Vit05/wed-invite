import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import config from '@/config/config';

const PhotoGallery = () => {
  const photos = config.data.photos;

  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setSelectedPhoto(photos[index]);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  // Prevent body scroll when modal is open and handle keyboard events
  useEffect(() => {
    if (selectedPhoto) {
      // Store current scroll position
      const scrollY = window.scrollY;
      
      // Disable body scroll completely
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      
      // Handle keyboard events
      const handleKeyDown = (event) => {
        switch (event.key) {
          case 'Escape':
            closeModal();
            break;
          case 'ArrowLeft':
            prevPhoto();
            break;
          case 'ArrowRight':
            nextPhoto();
            break;
          default:
            break;
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      
      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [selectedPhoto]);

  const nextPhoto = () => {
    const nextIndex = (currentIndex + 1) % photos.length;
    setCurrentIndex(nextIndex);
    setSelectedPhoto(photos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setCurrentIndex(prevIndex);
    setSelectedPhoto(photos[prevIndex]);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 200 }}
            viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/50 hover:border-slate-300/60 hover:shadow-xl transition-all duration-500"
            onClick={() => openModal(index)}
          >
            <img
              src={photo}
              alt={`Wedding photo ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              onError={(e) => {
                console.error(`Failed to load image: ${photo}`);
                e.target.style.display = 'none';
              }}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-slate-100/80 backdrop-blur-sm rounded-full p-4 border border-slate-300/50">
                    <Camera className="w-8 h-8 text-slate-600" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal - Rendered using Portal to document.body */}
      {selectedPhoto && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100vw',
              height: '100vh'
            }}
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto}
                alt="Wedding photo"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onError={(e) => {
                  console.error(`Failed to load modal image: ${selectedPhoto}`);
                  e.target.src = '/images/og-image.jpg';
                }}
              />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute -top-2 -right-2 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={prevPhoto}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextPhoto}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/70 text-white p-3 rounded-full hover:bg-black/90 transition-colors z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Photo counter */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm z-10">
                {currentIndex + 1} / {photos.length}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default PhotoGallery;
