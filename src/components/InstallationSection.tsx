import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, ShoppingCart, CreditCard, Download, Smartphone, Tv, Tablet, Monitor } from 'lucide-react';

const InstallationSection = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: 'Elige tu plan',
      description: 'Selecciona el plan que mejor se adapte a tus necesidades y presupuesto',
      details: ['Compara características', 'Evalúa duración', 'Considera dispositivos']
    },
    {
      icon: CreditCard,
      title: 'Realiza tu pago seguro',
      description: 'Completa tu compra de forma rápida y segura a través de WhatsApp',
      details: ['Transferencia bancaria', 'Depósito en efectivo', 'Pago internacional']
    },
    {
      icon: Download,
      title: 'Sigue nuestra guía',
      description: 'Te enviamos las instrucciones paso a paso para instalar en tus dispositivos',
      details: ['Guía detallada', 'Video tutoriales', 'Soporte incluido']
    }
  ];

  const devices = [
    { icon: Tv, name: 'Smart TV', compatibility: 'Android TV, Samsung, LG, Sony' },
    { icon: Smartphone, name: 'Móviles', compatibility: 'Android, iOS' },
    { icon: Tablet, name: 'Tablets', compatibility: 'Android, iPad' },
    { icon: Monitor, name: 'PC/Mac', compatibility: 'Windows, macOS, Linux' }
  ];

  const handleWhatsApp = () => {
    const message = 'Hola! Me interesa conocer más sobre la instalación de Ares TV. ¿Pueden ayudarme?';
    window.open(`https://wa.me/5256638746061?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="como-instalar" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ares-light-gray mb-6">
            ¿Cómo instalar{' '}
            <span className="text-ares-red">Ares TV</span>?
          </h2>
          <p className="text-xl text-ares-text-secondary max-w-2xl mx-auto">
            Proceso simple y rápido para comenzar a disfrutar del mejor entretenimiento
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="bg-ares-dark-card border-ares-text-secondary/20 hover:border-ares-red/50 transition-all duration-300 hover:shadow-ares relative overflow-hidden"
            >
              {/* Step Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-ares-red rounded-full flex items-center justify-center text-white font-bold text-sm">
                {index + 1}
              </div>

              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-ares-red" />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-bold text-ares-light-gray mb-3">
                      {step.title}
                    </h3>
                    <p className="text-ares-text-secondary mb-4">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-ares-text-secondary flex items-center justify-center">
                          <div className="w-1 h-1 bg-ares-red rounded-full mr-2"></div>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Devices Compatibility */}
        <div className="text-center mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-ares-light-gray mb-8">
            Compatible con todos tus{' '}
            <span className="text-ares-red">dispositivos</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {devices.map((device, index) => (
              <Card 
                key={index}
                className="bg-ares-dark-card border-ares-text-secondary/20 hover:border-ares-red/50 transition-all duration-300 hover:shadow-ares group"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-ares-red/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-ares-red/30 transition-colors duration-300">
                    <device.icon className="w-8 h-8 text-ares-red" />
                  </div>
                  <h4 className="text-ares-light-gray font-semibold mb-2">
                    {device.name}
                  </h4>
                  <p className="text-xs text-ares-text-secondary">
                    {device.compatibility}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className="bg-ares-dark-card border border-ares-red/30 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-ares-light-gray text-center mb-8">
            Tiempo estimado del proceso
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-ares-red mb-2">5 min</div>
              <div className="text-ares-text-secondary">Elegir y pagar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ares-red mb-2">10 min</div>
              <div className="text-ares-text-secondary">Recibir instrucciones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-ares-red mb-2">15 min</div>
              <div className="text-ares-text-secondary">Instalar y disfrutar</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-ares-light-gray">
            ¿Necesitas ayuda con la instalación?
          </h3>
          <p className="text-ares-text-secondary max-w-2xl mx-auto">
            Nuestro equipo de soporte técnico está disponible 24/7 para ayudarte en cada paso del proceso
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Soporte de Instalación
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-ares-red text-ares-red hover:bg-ares-red hover:text-white"
              onClick={() => {
                const element = document.querySelector('#planes-usuario');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Ver Planes Disponibles
            </Button>
          </div>

          {/* Additional Support Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12 max-w-3xl mx-auto">
            <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
              <div className="text-ares-red font-semibold mb-1">Video Tutoriales</div>
              <div className="text-ares-text-secondary text-sm">Guías paso a paso</div>
            </div>
            <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
              <div className="text-ares-red font-semibold mb-1">Soporte Remoto</div>
              <div className="text-ares-text-secondary text-sm">Asistencia personalizada</div>
            </div>
            <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
              <div className="text-ares-red font-semibold mb-1">Garantía</div>
              <div className="text-ares-text-secondary text-sm">100% funcional</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstallationSection;