import { Boxes, Braces } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary">mí</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Estudiante de Ingeniería Informática
            </h3>

            <p className="text-muted-foreground">
              Soy estudiante de Ingeniería Informática en el ITBA, con interés
              en el desarrollo de software. Me enfoco en adquirir bases técnicas
              sólidas a través de proyectos académicos y práctica constante.
            </p>

            <p className="text-muted-foreground">
              Tengo experiencia en programación orientada a objetos utilizando
              Java, así como en el desarrollo de aplicaciones con JavaScript,
              Node.js y React.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contacto
              </a>

              <a
                href="/cv.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Descargar CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Boxes className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Programación Orientada a Objetos
                  </h4>
                  <p className="text-muted-foreground">
                    Aplicación de conceptos de orientación a objetos como
                    abstracción, encapsulamiento y polimorfismo en proyectos
                    desarrollados en Java.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Braces className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Desarrollo con JavaScript
                  </h4>
                  <p className="text-muted-foreground">
                    Desarrollo de aplicaciones utilizando JavaScript, Node.js y
                    React, enfocándome en la estructura del código y la
                    interacción entre frontend y backend.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
