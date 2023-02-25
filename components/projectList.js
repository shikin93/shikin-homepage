import ProjectItem from './projectItem';

const projects = [
  {
    id: 1,
    title: 'Todo List App',
    body: 'Membuat Aplikasi sederhana untuk mencatat kegiatan sehari-hari',
    tags: ['React', 'Next', 'Tailwindcss'],
    source: 'https://github.com/shikin93/next-task-tracker',
    demo: 'https://next-task-tracker-nine.vercel.app',
  },
]

const ProjectList = () => {
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
