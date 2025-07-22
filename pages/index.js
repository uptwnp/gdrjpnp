import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Properties | Residential & Commercial Real Estate"
        description="Discover premium residential and commercial properties with world-class amenities. Get expert guidance from our real estate professionals."
        keywords="real estate, premium properties, residential, commercial, luxury homes, apartments, property investment, Mumbai, Delhi, Bangalore"
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <ProjectsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}