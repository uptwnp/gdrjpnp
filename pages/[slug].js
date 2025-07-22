import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectDetail from '../components/ProjectDetail';
import SEO from '../components/SEO';
import { useState, useEffect } from 'react';
import { generateProjectSEO } from '../lib/data';

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    
    async function fetchProject() {
      try {
        const response = await fetch('/api/data');
        const data = await response.json();
        const foundProject = data.projects.find(p => p.slug === slug);
        setProject(foundProject);
      } catch (error) {
        console.error('Error loading project:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProject();
  }, [slug]);

  const seoData = project ? generateProjectSEO(project) : {};

  return (
    <>
      <SEO 
        title={seoData.title || 'Project Details'}
        description={seoData.description}
        keywords={seoData.keywords}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ProjectDetail />
        </main>
        <Footer />
      </div>
    </>
  );
}