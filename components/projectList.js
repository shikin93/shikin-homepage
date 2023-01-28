import ProjectItem from './projectItem';

const ProjectList = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 max-h-[33rem] overflow-hidden">
      {
        projects.map((project) => (
          <ProjectItem
            key={project.id}
            {...project}
          />
        ))
      }
    </div>
  );
};

export default ProjectList;
