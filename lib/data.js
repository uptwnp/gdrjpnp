export async function getProjectsData() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch projects data');
    }
    return await response.json();
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