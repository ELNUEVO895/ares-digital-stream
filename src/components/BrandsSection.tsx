const BrandsSection = () => {
  const brands = [
    { name: 'Netflix', logo: 'NETFLIX' },
    { name: 'Disney+', logo: 'DISNEY+' },
    { name: 'HBO Max', logo: 'HBO MAX' },
    { name: 'Amazon Prime', logo: 'PRIME' },
    { name: 'Star+', logo: 'STAR+' },
    { name: 'Paramount+', logo: 'PARAMOUNT+' },
    { name: 'Apple TV+', logo: 'APPLE TV+' },
    { name: 'ESPN', logo: 'ESPN' },
  ];

  return (
    <section className="py-16 bg-ares-black/50 border-y border-ares-text-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-ares-light-gray mb-4">
            Accede a todas tus{' '}
            <span className="text-ares-red">plataformas favoritas</span>
          </h2>
          <p className="text-ares-text-secondary text-lg">
            Todo el contenido premium en un solo lugar
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group flex items-center justify-center p-4 bg-ares-dark-card rounded-lg border border-ares-text-secondary/20 hover:border-ares-red/50 transition-all duration-300 hover:shadow-ares transform hover:scale-105 animate-fade-in"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="text-center">
                <div className="text-ares-light-gray group-hover:text-ares-red transition-colors duration-300 font-bold text-sm">
                  {brand.logo}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-ares-text-secondary">
            Y muchas más plataformas disponibles en tu plan de Ares TV
          </p>
        </div>
      </div>

    </section>
  );
};

export default BrandsSection;