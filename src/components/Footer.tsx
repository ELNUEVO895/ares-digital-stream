import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Instagram, Mail, Phone, Clock, MapPin, CreditCard } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/5256638746061', '_blank');
  };

  const socialLinks = [
    { icon: MessageCircle, name: 'WhatsApp', href: 'https://wa.me/5256638746061' },
    { icon: Facebook, name: 'Facebook', href: '#' },
    { icon: Instagram, name: 'Instagram', href: '#' }
  ];

  const paymentMethods = [
    'Transferencia Bancaria',
    'Depósito en Efectivo',
    'Pago Internacional',
    'Cripto (Próximamente)'
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Planes Usuario', href: '#planes-usuario' },
    { name: 'Planes Revendedor', href: '#planes-revendedor' },
    { name: 'Cómo Instalar', href: '#como-instalar' },
    { name: 'FAQ', href: '#faq' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-ares-black border-t border-ares-text-secondary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-ares-red mb-2">ARES TV</h2>
              <p className="text-ares-text-secondary">
                Tu mejor opción en entretenimiento digital
              </p>
            </div>

            <div className="space-y-3 text-sm text-ares-text-secondary">
              <p>
                Acceso a cientos de canales, películas y series en alta definición, 
                todo en un solo lugar y al mejor precio.
              </p>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-ares-red" />
                <span>Servicio disponible globalmente</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-ares-light-gray font-semibold mb-3">Síguenos</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-ares-dark-card border border-ares-text-secondary/20 rounded-lg flex items-center justify-center hover:border-ares-red hover:bg-ares-red/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5 text-ares-text-secondary hover:text-ares-red" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-ares-light-gray font-semibold">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-ares-text-secondary hover:text-ares-red transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-ares-text-secondary/20">
              <h5 className="text-ares-light-gray font-semibold mb-3">Servicios</h5>
              <ul className="space-y-2 text-sm text-ares-text-secondary">
                <li>• Streaming Premium</li>
                <li>• Soporte 24/7</li>
                <li>• Instalación Gratuita</li>
                <li>• Planes Revendedor</li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-ares-light-gray font-semibold">Contacto</h4>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-ares-red mt-0.5" />
                <div>
                  <div className="text-ares-light-gray font-medium">WhatsApp</div>
                  <div className="text-ares-text-secondary text-sm">+52 566 387 4606</div>
                  <div className="text-ares-text-secondary text-xs">Respuesta inmediata</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-ares-red mt-0.5" />
                <div>
                  <div className="text-ares-light-gray font-medium">Email</div>
                  <div className="text-ares-text-secondary text-sm">soporte@arestv.com</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-ares-red mt-0.5" />
                <div>
                  <div className="text-ares-light-gray font-medium">Horarios</div>
                  <div className="text-ares-text-secondary text-sm">24/7 Disponible</div>
                  <div className="text-ares-text-secondary text-xs">Todos los días del año</div>
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsApp}
              className="w-full bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Contactar Ahora
            </Button>
          </div>

          {/* Payment & Legal */}
          <div className="space-y-6">
            <h4 className="text-ares-light-gray font-semibold">Métodos de Pago</h4>
            
            <div className="space-y-3">
              {paymentMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CreditCard className="w-4 h-4 text-ares-red" />
                  <span className="text-ares-text-secondary text-sm">{method}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-ares-text-secondary/20">
              <h5 className="text-ares-light-gray font-semibold mb-3">Garantías</h5>
              <ul className="space-y-2 text-sm text-ares-text-secondary">
                <li>✓ Servicio garantizado</li>
                <li>✓ Soporte incluido</li>
                <li>✓ Sin permanencia</li>
                <li>✓ Reembolso disponible</li>
              </ul>
            </div>

            <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-3">
              <div className="text-ares-red font-semibold text-sm mb-1">
                Activación Inmediata
              </div>
              <div className="text-ares-text-secondary text-xs">
                Tu servicio se activa en menos de 30 minutos
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-ares-text-secondary/20 bg-ares-black/50">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-ares-text-secondary text-sm">
                © {currentYear} Ares TV. Todos los derechos reservados.
              </p>
              <p className="text-ares-text-secondary text-xs mt-1">
                Servicio de entretenimiento digital premium
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-xs text-ares-text-secondary">
              <button className="hover:text-ares-red transition-colors duration-300">
                Términos de Servicio
              </button>
              <button className="hover:text-ares-red transition-colors duration-300">
                Política de Privacidad
              </button>
              <button className="hover:text-ares-red transition-colors duration-300">
                Aviso Legal
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex justify-center items-center space-x-8 mt-6 pt-6 border-t border-ares-text-secondary/10">
            <div className="text-center">
              <div className="text-ares-red font-bold text-lg">10K+</div>
              <div className="text-ares-text-secondary text-xs">Usuarios Activos</div>
            </div>
            <div className="text-center">
              <div className="text-ares-red font-bold text-lg">24/7</div>
              <div className="text-ares-text-secondary text-xs">Soporte</div>
            </div>
            <div className="text-center">
              <div className="text-ares-red font-bold text-lg">99.9%</div>
              <div className="text-ares-text-secondary text-xs">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-ares-red font-bold text-lg">4.9/5</div>
              <div className="text-ares-text-secondary text-xs">Satisfacción</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;