// src/components/Projects.jsx
import SectionWrapper from "../layout/SectionWrapper.jsx";
import ProjectImage from "./ProjectImage.jsx";
import ContentCard from "../layout/ContentCard.jsx";

export default function Projects({ projects, analyticsSource = "projects" }) {
  return (
    <SectionWrapper id="sales highlights" title="Sales Highlights">
      <ol className="group/list">
        {projects.map((prj, index) => (
          <li key={index} className="mb-12">
            <ContentCard
              link={prj.link}
              title={prj.title}
              description={prj.description}
              tags={prj.technologies}
              analyticsSource={analyticsSource}
            />
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}
