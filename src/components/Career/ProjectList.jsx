import ProjectCard from './ProjectCard';

export default function ProjectList({ projects, accentColor }) {
  return (
    <div>
      <h3 style={{ textAlign: 'center', marginBottom: 32 }}>项目经验</h3>
      {projects.map((project, i) => (
        <ProjectCard
          key={i}
          project={project}
          accentColor={accentColor}
          index={i}
        />
      ))}
    </div>
  );
}
