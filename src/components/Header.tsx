import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Planes Usuario', href: '#planes-usuario' },
    { name: 'Planes Revendedor', href: '#planes-revendedor' },
    { name: 'Cómo Instalar', href: '#como-instalar' },
    { name: 'Preguntas Frecuentes', href: '#faq' },
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/5256638746061', '_blank');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-ares-black/95 backdrop-blur-sm border-b border-ares-text-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-ares-red">
              ARES TV
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-ares-light-gray hover:text-ares-red transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* WhatsApp Button - Desktop */}
          <div className="hidden md:flex">
            <Button
              onClick={handleWhatsApp}
              variant="default"
              className="bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-ares-light-gray hover:text-ares-red transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-ares-black/98 border-b border-ares-text-secondary/20 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-ares-light-gray hover:text-ares-red transition-colors duration-300 font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={handleWhatsApp}
                variant="default"
                className="w-full mt-4 bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;