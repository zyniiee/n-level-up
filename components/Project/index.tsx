import { getCachedGalleryData } from "@/lib/cached-notion";
import ClientProject from "./ClientProject";

// Server Component that fetches data
const Project = async () => {
  // Use the cached function to fetch data
  const galleryData = await getCachedGalleryData();

  // Handle error case
  if ("error" in galleryData) {
    return (
      <div className="section_container">
        <p className="text-red-500">
          Error loading gallery projects: {galleryData.error}
        </p>
      </div>
    );
  }

  // Pass the featured projects to the client component for rendering
  return <ClientProject initialFeaturedProjects={galleryData.featured} />;
};

export default Project;
