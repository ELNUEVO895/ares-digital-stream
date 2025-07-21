import { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import sportsContent from '@/assets/sports-content.jpg';
import moviesContent from '@/assets/movies-series.jpg';
import familyContent from '@/assets/family-content.jpg';

const GallerySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: sportsContent,
      title: 'Deportes en Vivo',
      description: 'Fútbol, NBA, NFL y más deportes en alta definición',
      category: 'DEPORTES'
    },
    {
      id: 2,
      image: moviesContent,
      title: 'Películas y Series',
      description: 'Los últimos estrenos y series más populares',
      category: 'ENTRETENIMIENTO'
    },
    {
      id: 3,
      image: familyContent,
      title: 'Contenido Familiar',
      description: 'Diversión para toda la familia en un solo lugar',
      category: 'FAMILIA'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ares-light-gray mb-6">
            Descubre el mejor{' '}
            <span className="text-ares-red">contenido</span>
          </h2>
          <p className="text-xl text-ares-text-secondary max-w-2xl mx-auto">
            Desde deportes en vivo hasta las series más populares, tenemos todo lo que necesitas
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-card-ares">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0 relative">
                  <div className="relative h-96 md:h-[500px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ares-black/80 via-transparent to-transparent"></div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                      <div className="max-w-2xl">
                        <div className="inline-block px-3 py-1 bg-ares-red/20 text-ares-red text-sm font-semibold rounded-full mb-4 border border-ares-red/30">
                          {slide.category}
                        </div>
                        <h3 className="text-2xl md:text-4xl font-bold text-ares-light-gray mb-4">
                          {slide.title}
                        </h3>
                        <p className="text-lg text-ares-text-secondary mb-6">
                          {slide.description}
                        </p>
                        <button className="flex items-center space-x-2 bg-ares-red hover:bg-ares-red-hover transition-colors duration-300 text-white px-6 py-3 rounded-lg font-semibold shadow-ares">
                          <Play className="w-5 h-5" />
                          <span>Ver Ahora</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-ares-black/50 hover:bg-ares-red/80 text-ares-light-gray hover:text-white transition-all duration-300 p-3 rounded-full backdrop-blur-sm border border-ares-text-secondary/20"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-ares-black/50 hover:bg-ares-red/80 text-ares-light-gray hover:text-white transition-all duration-300 p-3 rounded-full backdrop-blur-sm border border-ares-text-secondary/20"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-ares-red shadow-ares'
                    : 'bg-ares-text-secondary hover:bg-ares-red/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`cursor-pointer group transition-all duration-300 ${
                currentSlide === index
                  ? 'ring-2 ring-ares-red shadow-ares'
                  : 'hover:ring-1 hover:ring-ares-red/50'
              }`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-ares-black/40 group-hover:bg-ares-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-ares-red text-xs font-semibold mb-1">
                    {slide.category}
                  </div>
                  <h4 className="text-ares-light-gray font-semibold">
                    {slide.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;