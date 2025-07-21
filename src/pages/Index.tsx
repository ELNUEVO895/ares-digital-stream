import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BrandsSection from '@/components/BrandsSection';
import GallerySection from '@/components/GallerySection';
import UserPlansSection from '@/components/UserPlansSection';
import ResellerPlansSection from '@/components/ResellerPlansSection';
import InstallationSection from '@/components/InstallationSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Header />
      <main>
        <Hero />
        <BrandsSection />
        <GallerySection />
        <UserPlansSection />
        <ResellerPlansSection />
        <InstallationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
