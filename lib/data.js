export async function getProjectsData() {
  try {
    // For server-side rendering, read directly from the file system
    if (typeof window === 'undefined') {
      const path = require('path');
      const fs = require('fs').promises;
      
      const jsonDirectory = path.join(process.cwd(), 'public');
      const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
      return JSON.parse(fileContents);
    } else {
      // For client-side, use fetch
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/data`);
      if (!response.ok) {
        throw new Error('Failed to fetch projects data');
      }
      return await response.json();
    }
  } catch (error) {
    console.error('Error fetching projects:', error);
    return { projects: [] };
  }
}

export function getProjectBySlug(projects, slug) {
  return projects.find(project => project.slug === slug);
}

export function generateProjectSEO(project) {
  return {
    title: `${project.name} - ${project.location} | Trident Realty`,
    description: project.description,
    keywords: project.seoKeywords?.join(', ') || `${project.name}, ${project.location}, real estate, property`,
    openGraph: {
      title: project.name,
      description: project.description,
      images: project.image ? [{ url: project.image, alt: project.name }] : [],
      type: 'website',
    },
  };
}