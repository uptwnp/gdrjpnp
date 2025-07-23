import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectDetail from "../components/ProjectDetail";
import SEO from "../components/SEO";
import { generateProjectSEO } from "../lib/data";

export async function getStaticPaths() {
  const path = require("path");
  const fs = require("fs").promises;

  try {
    const dataPath = path.join(process.cwd(), "public", "data.json");
    const jsonData = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(jsonData);

    const paths = data.projects.map((project) => ({
      params: { slug: project.slug },
    }));

    return {
      paths,
      fallback: false,
    };
  } catch (error) {
    console.error("Error reading data.json:", error);
    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({ params }) {
  const path = require("path");
  const fs = require("fs").promises;

  try {
    const dataPath = path.join(process.cwd(), "public", "data.json");
    const jsonData = await fs.readFile(dataPath, "utf8");
    const data = JSON.parse(jsonData);

    const project = data.projects.find((p) => p.slug === params.slug);

    if (!project) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        project,
      },
    };
  } catch (error) {
    console.error("Error reading data.json:", error);
    return {
      notFound: true,
    };
  }
}

export default function ProjectPage({ project }) {
  if (!project) {
    return (
      <>
        <SEO
          title="Project Not Found"
          description="The requested project could not be found."
        />
        <div className="min-h-screen bg-white">
          <Header />
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Project Not Found
              </h1>
              <p className="text-gray-600">
                The requested project could not be found.
              </p>
            </div>
          </main>
          <Footer />
        </div>
      </>
    );
  }

  const seoData = project ? generateProjectSEO(project) : {};

  return (
    <>
      <SEO
        title={seoData.title || "Project Details"}
        description={seoData.description}
        keywords={seoData.keywords}
      />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <ProjectDetail project={project} />
        </main>
        <Footer />
      </div>
    </>
  );
}
