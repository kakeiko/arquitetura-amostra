import { BudgetCta, PageHero, WorkProcess } from "../components";
import { services } from "../data";

export default function ServicosPage() {
  return (
    <>
      <PageHero
        title="Servicos para transformar ideia, terreno ou imovel em projeto executavel."
        text="Do estudo inicial ao detalhamento de obra, o escritorio organiza decisoes tecnicas e esteticas em um processo claro."
      />
      <section className="section-shell pt-0">
        <div className="grid gap-px overflow-hidden border border-stone-300 bg-stone-300 md:grid-cols-2">
          {services.map((service, index) => (
            <article key={service} className="bg-[#f7f3ed] p-8">
              <p className="font-serif text-5xl text-amber-800">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-8 font-serif text-3xl text-stone-950">{service}</h2>
              <p className="mt-5 leading-8 text-stone-600">
                Entrega personalizada com briefing, estudos, especificacoes e documentacao
                orientada para tomada de decisao e execucao.
              </p>
            </article>
          ))}
        </div>
      </section>
      <WorkProcess />
      <BudgetCta />
    </>
  );
}
