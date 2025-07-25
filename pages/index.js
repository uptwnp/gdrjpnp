import Header from "../components/Header";
import Hero from "../components/Hero";
import ProjectsSection from "../components/ProjectsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { getProjectsData } from "../lib/data";

export default function Home({ projects }) {
  return (
    <>
      <SEO
        title="Trident Realty - All Project Info | New, Pre Launch, Delivered, Under Development"
        description="Get All Info About Trident Realty Projects,& Updates. Discover Oppertunities to Get Invest in Premium Real Estate. Get expert guidance from our real estate professionals on 9138331357 or by Uptown Properties"
        keywords="Trident Realty,Trident Reality,Trident Reality Projects, Trident Reality Pre Launch, real estate, premium properties, residential, commercial, luxury homes, apartments, property investment, Mumbai, Delhi, Bangalore"
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
    console.error("Error fetching projects for SSR:", error);
    return {
      props: {
        projects: [],
      },
    };
  }
}
