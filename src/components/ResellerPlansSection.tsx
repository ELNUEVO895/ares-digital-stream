import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, TrendingUp, Users, DollarSign, Shield } from 'lucide-react';

const ResellerPlansSection = () => {
  const [currency, setCurrency] = useState<'MXN' | 'USD'>('MXN');

  const priceTablesMXN = [
    { credits: '1-9 créditos', price: 250, clientPrice: 299 },
    { credits: '10-24 créditos', price: 230, clientPrice: 299 },
    { credits: '25-49 créditos', price: 210, clientPrice: 299 },
    { credits: '50-99 créditos', price: 190, clientPrice: 299 },
    { credits: '100+ créditos', price: 170, clientPrice: 299 }
  ];

  const priceTablesUSD = [
    { credits: '1-9 créditos', price: 15, clientPrice: 19 },
    { credits: '10-24 créditos', price: 14, clientPrice: 19 },
    { credits: '25-49 créditos', price: 13, clientPrice: 19 },
    { credits: '50-99 créditos', price: 12, clientPrice: 19 },
    { credits: '100+ créditos', price: 11, clientPrice: 19 }
  ];

  const currentTable = currency === 'MXN' ? priceTablesMXN : priceTablesUSD;

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Ganancias Garantizadas',
      description: 'Márgenes de ganancia competitivos en todos los planes'
    },
    {
      icon: Users,
      title: 'Soporte Dedicado',
      description: 'Equipo de soporte exclusivo para revendedores'
    },
    {
      icon: DollarSign,
      title: 'Precios Preferenciales',
      description: 'Mejores precios según tu volumen de ventas'
    },
    {
      icon: Shield,
      title: 'Protección Total',
      description: 'Garantía en todos los servicios que vendas'
    }
  ];

  const handleWhatsApp = () => {
    const message = `Hola! Estoy interesado en ser revendedor de Ares TV. ¿Puedes darme más información sobre los planes y requisitos?`;
    window.open(`https://wa.me/5256638746061?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planes-revendedor" className="py-20 bg-ares-black/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-ares-light-gray mb-6">
            Inicia tu propio{' '}
            <span className="text-ares-red">negocio</span> con Ares TV
          </h2>
          <p className="text-xl text-ares-text-secondary max-w-3xl mx-auto">
            Conviértete en revendedor oficial y genera ingresos con nuestros planes competitivos
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-ares-dark-card border-ares-text-secondary/20 hover:border-ares-red/50 transition-all duration-300 hover:shadow-ares">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-ares-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-ares-red" />
                </div>
                <h3 className="text-ares-light-gray font-semibold mb-2">{benefit.title}</h3>
                <p className="text-ares-text-secondary text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Currency Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-ares-dark-card border border-ares-text-secondary/20 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setCurrency('MXN')}
              className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${
                currency === 'MXN'
                  ? 'bg-ares-red text-white shadow-ares'
                  : 'text-ares-text-secondary hover:text-ares-light-gray'
              }`}
            >
              Precios México (MXN)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-6 py-2 rounded-md transition-all duration-300 font-semibold ${
                currency === 'USD'
                  ? 'bg-ares-red text-white shadow-ares'
                  : 'text-ares-text-secondary hover:text-ares-light-gray'
              }`}
            >
              Precios USA (USD)
            </button>
          </div>
        </div>

        {/* Price Tables */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="bg-ares-dark-card border-ares-red/30">
            <CardHeader>
              <CardTitle className="text-2xl text-ares-light-gray text-center">
                {currency === 'MXN' ? 'Nuestros precios México' : 'Nuestros precios USA'}
              </CardTitle>
              <p className="text-ares-text-secondary text-center">
                Costos por crédito • Respetar precios cliente final • Precios exclusivos
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-ares-text-secondary/20">
                      <th className="text-left py-4 px-4 text-ares-light-gray font-semibold">
                        Cantidad de Créditos
                      </th>
                      <th className="text-center py-4 px-4 text-ares-light-gray font-semibold">
                        Tu Costo
                      </th>
                      <th className="text-center py-4 px-4 text-ares-light-gray font-semibold">
                        Precio Cliente
                      </th>
                      <th className="text-right py-4 px-4 text-ares-light-gray font-semibold">
                        Tu Ganancia
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentTable.map((row, index) => (
                      <tr 
                        key={index}
                        className="border-b border-ares-text-secondary/10 hover:bg-ares-red/5 transition-colors duration-300"
                      >
                        <td className="py-4 px-4 text-ares-light-gray font-medium">
                          {row.credits}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className="text-ares-red font-bold text-lg">
                            ${row.price} {currency}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center text-ares-text-secondary">
                          ${row.clientPrice} {currency}
                        </td>
                        <td className="py-4 px-4 text-right">
                          <span className="text-green-400 font-bold">
                            ${row.clientPrice - row.price} {currency}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 text-center space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
                    <div className="text-ares-red font-semibold">Inversión Mínima</div>
                    <div className="text-ares-light-gray">
                      {currency === 'MXN' ? '$2,500 MXN' : '$150 USD'}
                    </div>
                  </div>
                  <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
                    <div className="text-ares-red font-semibold">Activación</div>
                    <div className="text-ares-light-gray">Inmediata</div>
                  </div>
                  <div className="bg-ares-red/10 border border-ares-red/30 rounded-lg p-4">
                    <div className="text-ares-red font-semibold">Comisiones</div>
                    <div className="text-ares-light-gray">Hasta 40%</div>
                  </div>
                </div>

                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="bg-gradient-primary hover:bg-ares-red-hover transition-all duration-300 shadow-ares transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quiero ser Revendedor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-ares-light-gray mb-6">
            ¿Por qué elegir ser revendedor de Ares TV?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h4 className="text-ares-red font-semibold">Ventajas Comerciales</h4>
              <ul className="space-y-2 text-ares-text-secondary">
                <li>• Producto de alta demanda</li>
                <li>• Mercado en constante crecimiento</li>
                <li>• Márgenes de ganancia atractivos</li>
                <li>• Sin inversión en infraestructura</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-ares-red font-semibold">Soporte Incluido</h4>
              <ul className="space-y-2 text-ares-text-secondary">
                <li>• Capacitación completa</li>
                <li>• Material promocional</li>
                <li>• Soporte técnico 24/7</li>
                <li>• Panel de administración</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResellerPlansSection;