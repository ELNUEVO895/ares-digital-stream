import { Button } from '@/components/ui/button';
import { Play, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-ares-tv.jpg';

const Hero = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5256638746061', '_blank');
  };

  const scrollToPlans = () => {
    const element = document.querySelector('#planes-usuario');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Ares TV Entertainment Setup"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ares-black/90 via-ares-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-ares-light-gray leading-tight">
                Ares TV es tu{' '}
                <span className="text-ares-red">mejor opción</span> en{' '}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  entretenimiento digital
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-ares-text-secondary leading-relaxed">
                Todas tus plataformas favoritas en un mismo lugar al mejor precio
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-ares-red rounded-full"></div>
                <span className="text-ares-light-gray font-medium">Hasta 4 dispositivos por usuario</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-ares-red rounded-full"></div>
                <span className="text-ares-light-gray font-medium">Sin contratos ni complicaciones</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-ares-red rounded-full"></div>
                <span className="text-ares-light-gray font-medium">Soporte 24/7 vía WhatsApp</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToPlans}
                size="lg"
                className="bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares transform hover:scale-105 text-lg px-8 py-6"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Planes
              </Button>
              
              <Button
                onClick={handleWhatsApp}
                size="lg"
                variant="outline"
                className="border-ares-red text-ares-red hover:bg-ares-red hover:text-white transition-all duration-300 text-lg px-8 py-6"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Probar Gratis
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center lg:text-left pt-8">
              <p className="text-ares-text-secondary text-sm mb-4">Confían en nosotros:</p>
              <div className="flex justify-center lg:justify-start items-center space-x-8 opacity-60">
                <span className="text-ares-light-gray font-semibold">+10K</span>
                <span className="text-ares-text-secondary">Usuarios activos</span>
                <span className="text-ares-light-gray font-semibold">24/7</span>
                <span className="text-ares-text-secondary">Soporte</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Content */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Device Display */}
              <div className="relative bg-ares-dark-card rounded-2xl shadow-card-ares p-8 border border-ares-text-secondary/20">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-ares-red">ARES</div>
                  <div className="text-2xl text-ares-light-gray font-semibold">TV</div>
                  <div className="text-ares-text-secondary">Premium Digital Player</div>
                  
                  {/* Feature Icons */}
                  <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto">
                        <Play className="w-6 h-6 text-ares-red" />
                      </div>
                      <span className="text-xs text-ares-text-secondary">HD/4K</span>
                    </div>
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto">
                        <MessageCircle className="w-6 h-6 text-ares-red" />
                      </div>
                      <span className="text-xs text-ares-text-secondary">Soporte</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-ares-red rounded-full flex items-center justify-center shadow-ares animate-pulse">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-ares-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-ares-red rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;