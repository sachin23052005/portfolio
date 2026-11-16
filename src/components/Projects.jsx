import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function Projects({ projects }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work.">
      <div className="space-y-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
