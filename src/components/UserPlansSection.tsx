import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Check, Smartphone, Tv, Tablet, Monitor, Gift } from 'lucide-react';

const UserPlansSection = () => {
  const [currency, setCurrency] = useState<'MXN' | 'USD'>('MXN');

  const plans = [
    {
      duration: '1 Mes',
      priceMXN: 299,
      priceUSD: 19,
      popular: false,
      features: ['Hasta 4 dispositivos', 'Soporte 24/7', 'HD/4K calidad', 'Sin contrato']
    },
    {
      duration: '3 Meses',
      priceMXN: 799,
      priceUSD: 49,
      popular: true,
      features: ['Hasta 4 dispositivos', 'Soporte 24/7', 'HD/4K calidad', 'Sin contrato', 'Ahorro 11%']
    },
    {
      duration: '6 Meses',
      priceMXN: 1499,
      priceUSD: 89,
      popular: false,
      features: ['Hasta 4 dispositivos', 'Soporte 24/7', 'HD/4K calidad', 'Sin contrato', 'Ahorro 17%']
    },
    {
      duration: '12 Meses',
      priceMXN: 2799,
      priceUSD: 159,
      popular: false,
      bonus: true,
      features: ['Hasta 4 dispositivos', 'Soporte 24/7', 'HD/4K calidad', 'Sin contrato', 'Ahorro 22%', '+ 2 meses GRATIS']
    }
  ];

  const handleWhatsApp = (plan: string) => {
    const message = `Hola! Estoy interesado en el plan de ${plan} de Ares TV. ¿Puedes darme más información?`;
    window.open(`https://wa.me/5256638746061?text=${encodeURIComponent(message)}`, '_blank');
  };

  const deviceIcons = [
    { icon: Tv, name: 'Smart TV' },
    { icon: Smartphone, name: 'Móvil' },
    { icon: Tablet, name: 'Tablet' },
    { icon: Monitor, name: 'PC' }
  ];

  return (
    <section id="planes-usuario" className="py-20 bg-gradient-dark">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ares-light-gray mb-6">
            Planes para{' '}
            <span className="text-ares-red">Usuarios Finales</span>
          </h2>
          <p className="text-xl text-ares-text-secondary max-w-2xl mx-auto mb-8">
            Elige el plan que mejor se adapte a tus necesidades y disfruta del mejor entretenimiento
          </p>

          {/* Currency Selector */}
          <div className="flex justify-center">
            <div className="bg-ares-dark-card border border-ares-text-secondary/20 rounded-lg p-1 inline-flex">
              <button
                onClick={() => setCurrency('MXN')}
                className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${
                  currency === 'MXN'
                    ? 'bg-ares-red text-white shadow-ares'
                    : 'text-ares-text-secondary hover:text-ares-light-gray'
                }`}
              >
                Pesos MXN
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${
                  currency === 'USD'
                    ? 'bg-ares-red text-white shadow-ares'
                    : 'text-ares-text-secondary hover:text-ares-light-gray'
                }`}
              >
                Dólares USD
              </button>
            </div>
          </div>
        </div>

        {/* Device Compatibility */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-ares-light-gray mb-6">
            Compatible con todos tus dispositivos
          </h3>
          <div className="flex justify-center space-x-8">
            {deviceIcons.map((device, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-ares-dark-card border border-ares-text-secondary/20 rounded-lg flex items-center justify-center mb-2 group-hover:border-ares-red/50 transition-all duration-300">
                  <device.icon className="w-8 h-8 text-ares-text-secondary group-hover:text-ares-red transition-colors duration-300" />
                </div>
                <span className="text-sm text-ares-text-secondary">{device.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-ares-dark-card border-ares-text-secondary/20 hover:border-ares-red/50 transition-all duration-300 hover:shadow-ares ${
                plan.popular ? 'ring-2 ring-ares-red shadow-ares scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-ares-red text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              {plan.bonus && currency === 'USD' && (
                <div className="absolute -top-3 right-4">
                  <div className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Gift className="w-3 h-3 mr-1" />
                    +2 meses
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-ares-light-gray text-xl mb-2">
                  {plan.duration}
                </CardTitle>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-ares-red">
                    {currency === 'MXN' ? `$${plan.priceMXN}` : `$${plan.priceUSD}`}
                  </div>
                  <div className="text-ares-text-secondary text-sm">
                    {currency === 'MXN' ? 'Pesos mexicanos' : 'Dólares americanos'}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-4 h-4 text-ares-red flex-shrink-0" />
                      <span className="text-ares-light-gray text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleWhatsApp(plan.duration)}
                  className="w-full bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Suscribirse
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-6">
          <div className="bg-ares-dark-card border border-ares-red/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h4 className="text-ares-red font-semibold mb-2">
              ¿Necesitas ayuda para elegir?
            </h4>
            <p className="text-ares-text-secondary mb-4">
              Nuestro equipo de soporte está disponible 24/7 para ayudarte a encontrar el plan perfecto
            </p>
            <Button
              onClick={() => handleWhatsApp('consulta general')}
              variant="outline"
              className="border-ares-red text-ares-red hover:bg-ares-red hover:text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Consultar por WhatsApp
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-ares-text-secondary">
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-ares-red" />
              <span>Sin permanencia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-ares-red" />
              <span>Cancelación libre</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-ares-red" />
              <span>Activación inmediata</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-ares-red" />
              <span>Soporte incluido</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPlansSection;