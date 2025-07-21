import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Clock, Shield, HelpCircle } from 'lucide-react';

const FAQSection = () => {
  const faqs = [
    {
      question: '¿Qué dispositivos son compatibles con Ares TV?',
      answer: 'Ares TV es compatible con Smart TV (Android TV, Samsung, LG, Sony), dispositivos móviles (Android, iOS), tablets, Fire TV Stick, Apple TV, Chromecast, PC/Mac y prácticamente cualquier dispositivo que reproduzca contenido digital.'
    },
    {
      question: '¿Cuántos dispositivos puedo usar con mi plan?',
      answer: 'Todos nuestros planes incluyen hasta 4 dispositivos simultáneos. Puedes instalar Ares TV en tantos dispositivos como quieras, pero solo podrás ver contenido en 4 al mismo tiempo.'
    },
    {
      question: '¿Cómo realizo el pago?',
      answer: 'Aceptamos transferencia bancaria, depósitos en efectivo, pagos internacionales y otros métodos seguros. Todo el proceso se coordina a través de WhatsApp para mayor comodidad y seguridad.'
    },
    {
      question: '¿Qué contenido incluye Ares TV?',
      answer: 'Tenemos acceso a Netflix, Disney+, HBO Max, Amazon Prime, Star+, Paramount+, Apple TV+, ESPN y muchas más plataformas. Incluye películas, series, deportes en vivo, contenido infantil y documentales.'
    },
    {
      question: '¿La instalación es complicada?',
      answer: 'Para nada. Te enviamos una guía paso a paso con imágenes y videos explicativos. Además, nuestro equipo de soporte está disponible 24/7 para ayudarte con la instalación de forma gratuita.'
    },
    {
      question: '¿Qué calidad de video ofrece el servicio?',
      answer: 'Ofrecemos contenido en calidad HD y 4K (dependiendo del contenido original). La calidad se ajusta automáticamente según tu conexión a internet para una experiencia óptima.'
    },
    {
      question: '¿Hay permanencia o contrato?',
      answer: 'No hay permanencia ni contratos. Puedes cancelar tu servicio en cualquier momento sin penalizaciones. Solo pagas por el tiempo que elijas usar el servicio.'
    },
    {
      question: '¿Qué pasa si tengo problemas técnicos?',
      answer: 'Nuestro equipo de soporte técnico está disponible 24/7 a través de WhatsApp. Solucionamos cualquier problema de forma rápida y gratuita durante toda la vigencia de tu plan.'
    },
    {
      question: '¿Puedo usar Ares TV fuera de México?',
      answer: 'Sí, puedes usar Ares TV en cualquier parte del mundo donde tengas conexión a internet. El servicio funciona globalmente sin restricciones geográficas.'
    },
    {
      question: '¿Cómo me convierto en revendedor?',
      answer: 'Contáctanos por WhatsApp para conocer los requisitos y condiciones. Ofrecemos planes especiales para revendedores con precios preferenciales y soporte dedicado.'
    }
  ];

  const handleWhatsApp = () => {
    const message = 'Hola! Tengo una pregunta sobre Ares TV que no encontré en las FAQ. ¿Pueden ayudarme?';
    window.open(`https://wa.me/5256638746061?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="faq" className="py-20 bg-ares-black/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ares-light-gray mb-6">
            Preguntas{' '}
            <span className="text-ares-red">Frecuentes</span>
          </h2>
          <p className="text-xl text-ares-text-secondary max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestro servicio
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-ares-dark-card border border-ares-text-secondary/20 rounded-lg px-6 hover:border-ares-red/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-ares-light-gray hover:text-ares-red transition-colors duration-300 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ares-text-secondary pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Support Cards */}
          <div className="space-y-6">
            {/* WhatsApp Support Card */}
            <Card className="bg-ares-dark-card border-ares-red/30 hover:shadow-ares transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-ares-red" />
                </div>
                <h3 className="text-ares-light-gray font-semibold mb-2">
                  Soporte vía WhatsApp
                </h3>
                <p className="text-ares-text-secondary text-sm mb-4">
                  ¿No encontraste tu respuesta? Nuestro equipo está listo para ayudarte
                </p>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-ares-dark-card border-ares-text-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-ares-red" />
                </div>
                <h3 className="text-ares-light-gray font-semibold mb-2">
                  Horarios de Atención
                </h3>
                <div className="space-y-2 text-ares-text-secondary text-sm">
                  <div>
                    <div className="font-medium text-ares-light-gray">Lunes a Domingo</div>
                    <div>24 horas disponible</div>
                  </div>
                  <div className="pt-2 border-t border-ares-text-secondary/20">
                    <div className="text-ares-red font-medium">Respuesta promedio</div>
                    <div>Menos de 5 minutos</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee Card */}
            <Card className="bg-ares-dark-card border-ares-text-secondary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-ares-red" />
                </div>
                <h3 className="text-ares-light-gray font-semibold mb-2">
                  Garantía de Servicio
                </h3>
                <p className="text-ares-text-secondary text-sm">
                  Garantizamos el funcionamiento completo de tu servicio durante toda la vigencia de tu plan
                </p>
              </CardContent>
            </Card>

            {/* Additional Help */}
            <Card className="bg-gradient-to-br from-ares-red/10 to-ares-red/5 border-ares-red/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HelpCircle className="w-8 h-8 text-ares-red" />
                </div>
                <h3 className="text-ares-light-gray font-semibold mb-2">
                  ¿Primera vez con streaming?
                </h3>
                <p className="text-ares-text-secondary text-sm mb-4">
                  Te ayudamos desde cero con tutoriales y soporte personalizado
                </p>
                <Button
                  onClick={() => {
                    const message = 'Hola! Soy nuevo en esto del streaming y me gustaría que me expliquen cómo funciona Ares TV desde el principio.';
                    window.open(`https://wa.me/5256638746061?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  variant="outline"
                  size="sm"
                  className="border-ares-red text-ares-red hover:bg-ares-red hover:text-white"
                >
                  Ayuda Personalizada
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-ares-light-gray mb-4">
            ¿Listo para comenzar?
          </h3>
          <p className="text-ares-text-secondary mb-6">
            Únete a más de 10,000 usuarios que ya disfrutan de Ares TV
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => {
                const element = document.querySelector('#planes-usuario');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg"
              className="bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
            >
              Ver Planes
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              variant="outline"
              className="border-ares-red text-ares-red hover:bg-ares-red hover:text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;