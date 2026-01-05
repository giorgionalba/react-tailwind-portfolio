import { ArrowRight, Github, Palette, Database } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Drawing App",
    description:
      "Aplicación de dibujo en JavaFX con sistema de capas, edición de figuras y renderizado en tiempo real.",
    icon: <Palette size={40} className="text-primary" />,
    tags: ["Java", "JavaFX", "OOP"],
    githubUrl: "https://github.com/giorgionalba/drawing-app-javafx",
  },
  {
    id: 2,
    title: "MovieWatch Backend",
    description:
      "API RESTful para gestión de películas y watchlists con autenticación y base de datos PostgreSQL.",
    icon: <Database size={40} className="text-primary" />,
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    githubUrl: "https://github.com/giorgionalba/moviewatch-nodejs",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Proyectos <span className="text-primary">Destacados</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Aquí presento algunos de mis proyectos recientes. Cada uno fue
          desarrollado con atención al detalle, rendimiento y experiencia de
          usuario.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 w-full md:w-[calc(50%-1rem)] max-w-md flex flex-col"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium border border-primary/20 rounded-full bg-primary/5 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border/50">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                >
                  <Github size={18} />
                  Ver Código
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/giorgionalba"
          >
            Ver mi Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
