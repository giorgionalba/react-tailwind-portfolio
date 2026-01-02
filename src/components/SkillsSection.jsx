import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Lenguajes
  { name: "C", category: "lenguajes" },
  { name: "Java", category: "lenguajes" },
  { name: "JavaScript", category: "lenguajes" },

  // Backend / Web
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "React", category: "backend" },
  { name: "APIs REST", category: "backend" },

  // Datos
  { name: "Procesamiento de datos CSV", category: "datos" },
  { name: "Manejo de documentos XML", category: "datos" },
  { name: "MongoDB", category: "datos" },
  { name: "PostgreSQL", category: "datos" },

  // Herramientas
  { name: "Git", category: "herramientas" },
  { name: "Postman", category: "herramientas" },
];

const categories = [
  { key: "all", label: "Todas" },
  { key: "lenguajes", label: "Lenguajes" },
  { key: "backend", label: "Backend / Web" },
  { key: "datos", label: "Datos" },
  { key: "herramientas", label: "Herramientas" },
];

const categoryStyles = {
  lenguajes: "border-primary/40 text-primary",
  backend: "border-blue-400/40 text-blue-400",
  datos: "border-emerald-400/40 text-emerald-400",
  herramientas: "border-violet-400/40 text-violet-400",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Habilidades <span className="text-primary">Técnicas</span>
        </h2>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-muted-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className={cn(
                "bg-card p-6 rounded-xl border transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10",
                categoryStyles[skill.category]
              )}
            >
              <h3 className="font-medium text-lg tracking-wide text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
