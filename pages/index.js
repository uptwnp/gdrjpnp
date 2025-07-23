import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { getProjectsData } from '../lib/data';

export default function Home({ projects }) {
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
          <ProjectsSection projects={projects} />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps() {
  try {
    // Fetch projects data on the server
    const data = await getProjectsData();
    
    return {
      props: {
        projects: data.projects || [],
      },
    };
  } catch (error) {
    console.error('Error fetching projects for SSR:', error);
    return {
      props: {
        projects: [],
      },
    };
  }
}