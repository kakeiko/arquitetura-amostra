import { BudgetCta, PageHero } from "../components";
import { projects } from "../data";

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        title="Portfólio de projetos residenciais, comerciais e interiores."
        text="Uma seleção de obras pensadas para rotina real: luz natural, circulação fluida, materiais duráveis e atmosfera sob medida."
      />
      <section className="section-shell pt-0">
        <div className="grid gap-10">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="grid items-end gap-8 border-t border-stone-300 pt-10 lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {project.type} / {project.location}
                </p>
                <h2 className="mt-4 font-serif text-5xl text-stone-950">{project.title}</h2>
                <p className="mt-5 text-lg leading-8 text-stone-600">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <BudgetCta />
    </>
  );
}
