import Link from "next/link";
import { faqs, navItems, projects, services } from "./data";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-[#f7f3ed]/90 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="font-serif text-2xl tracking-wide text-stone-950">
          Atelier Viga
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-stone-600 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href="/contato"
          className="inline-flex h-11 items-center justify-center border border-stone-950 px-5 text-sm font-semibold uppercase tracking-[0.16em] text-stone-950 transition hover:bg-stone-950 hover:text-white"
        >
          Orçamento
        </Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-stone-950 px-5 py-16 text-stone-100 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="font-serif text-4xl">Atelier Viga</p>
          <p className="mt-5 max-w-md text-stone-400">
            Arquitetura autoral para casas, interiores e espacos comerciais com rigor tecnico,
            calma visual e materiais honestos.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Mapa</p>
          <div className="mt-5 grid gap-3 text-stone-300">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">
            Contato
          </p>
          <div className="mt-5 space-y-3 text-stone-300">
            <p>contato@atelierviga.com</p>
            <p>+55 11 94000-1820</p>
            <p>Rua Harmonia, 284 - Sao Paulo</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  text,
  inverted = false,
}: {
  eyebrow: string;
  title: string;
  text: string;
  inverted?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-800">{eyebrow}</p>
      <h2 className={`mt-4 font-serif text-4xl sm:text-5xl ${inverted ? "text-white" : "text-stone-950"}`}>
        {title}
      </h2>
      <p className={`mt-5 text-lg leading-8 ${inverted ? "text-stone-300" : "text-stone-600"}`}>
        {text}
      </p>
    </div>
  );
}

export function HeroMinimal() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden pt-20">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90"
        alt="Casa contemporanea com fachada de vidro e jardim"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/35" />
      <div className="relative mx-auto flex min-h-[calc(92vh-5rem)] max-w-7xl items-end px-5 pb-20 sm:px-8">
        <div className="max-w-4xl text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-200">
            Arquitetura residencial e interiores
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-7xl lg:text-8xl">
            Espaços precisos, acolhedores e feitos para durar.
          </h1>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link className="button-light" href="/projetos">
              Ver projetos
            </Link>
            <Link className="button-ghost" href="/contato">
              Solicitar proposta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioPreview() {
  return (
    <section className="section-shell" id="portfolio">
      <SectionIntro
        eyebrow="Portfolio"
        title="Projetos que equilibram proporção, uso e atmosfera."
        text="Cada projeto nasce de uma leitura cuidadosa do terreno, da rotina e dos materiais que melhor envelhecem com o tempo."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="group">
            <div className="aspect-[4/5] overflow-hidden bg-stone-200">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-start justify-between gap-5">
              <div>
                <h3 className="font-serif text-2xl text-stone-950">{project.title}</h3>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-stone-500">
                  {project.type} / {project.location}
                </p>
              </div>
              <span className="text-2xl text-amber-800">+</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function AboutStudio() {
  return (
    <section className="section-shell grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="aspect-[4/5] overflow-hidden bg-stone-200">
        <img
          src="https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1400&q=85"
          alt="Interior elegante com mesa de reuniao e materiais naturais"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <SectionIntro
          eyebrow="Sobre o escritorio"
          title="Um estudio boutique para projetos com presença silenciosa."
          text="Combinamos direção criativa, planejamento tecnico e acompanhamento próximo para transformar ideias em ambientes coerentes do conceito a obra."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ["12+", "anos de experiencia"],
            ["86", "projetos entregues"],
            ["04", "etapas claras"],
          ].map(([value, label]) => (
            <div key={label} className="border-t border-stone-300 pt-5">
              <p className="font-serif text-4xl text-stone-950">{value}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-stone-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WorkProcess() {
  const steps = [
    ["01", "Imersão", "Briefing, referências, visita tecnica e definição de prioridades."],
    ["02", "Conceito", "Estudo volumétrico, layout, materialidade e narrativa do espaço."],
    ["03", "Detalhamento", "Executivo, marcenaria, luminotecnica e compatibilizações."],
    ["04", "Obra", "Apoio em fornecedores, visitas tecnicas e ajustes de campo."],
  ];

  return (
    <section className="section-shell">
      <SectionIntro
        eyebrow="Processo"
        title="Um caminho claro entre primeira conversa e obra pronta."
        text="O método reduz incertezas, antecipa decisões importantes e mantem a estética alinhada ao orçamento."
      />
      <div className="mt-12 grid gap-px overflow-hidden border border-stone-300 bg-stone-300 lg:grid-cols-4">
        {steps.map(([number, title, text]) => (
          <div key={number} className="bg-[#f7f3ed] p-7">
            <p className="font-serif text-5xl text-amber-800">{number}</p>
            <h3 className="mt-8 font-serif text-2xl text-stone-950">{title}</h3>
            <p className="mt-4 leading-7 text-stone-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Differentials() {
  return (
    <section className="bg-stone-950 px-5 py-24 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro
        eyebrow="Diferenciais"
        title="Rigor de escritório grande, cuidado de atelier."
          text="Nossa entrega junta desenho autoral, cronograma realista e documentação pensada para quem constroi."
          inverted
      />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            "Caderno tecnico completo para reduzir improvisos na obra.",
            "Curadoria de materiais com foco em durabilidade e manutenção.",
            "Comunicação objetiva com clientes, fornecedores e equipes.",
          ].map((item) => (
            <div key={item} className="border border-stone-700 p-7">
              <p className="text-lg leading-8 text-stone-200">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="section-shell">
      <SectionIntro
        eyebrow="Depoimentos"
        title="Clientes que viveram o processo de perto."
        text="A relação com cada cliente e construída com escuta, transparência e decisões bem documentadas."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {[
          [
            "O projeto traduziu exatamente a rotina da nossa familia. A obra foi muito mais tranquila porque cada detalhe ja estava resolvido.",
            "Mariana e Felipe, Casa Horizonte",
          ],
          [
            "O escritório conseguiu dar identidade ao nosso espaço comercial sem perder funcionalidade. A entrega técnica foi impecável.",
            "Renata Costa, Galeria Onze",
          ],
        ].map(([quote, author]) => (
          <blockquote key={author} className="border-l-2 border-amber-800 pl-8">
            <p className="font-serif text-3xl leading-tight text-stone-950">&ldquo;{quote}&rdquo;</p>
            <cite className="mt-6 block not-italic text-sm uppercase tracking-[0.18em] text-stone-500">
              {author}
            </cite>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

export function BudgetCta() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 bg-[#d7c3a3] p-8 sm:p-12 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-700">
            CTA Orçamento
          </p>
          <h2 className="mt-4 font-serif text-4xl text-stone-950 sm:text-5xl">
            Vamos desenhar o proximo endereço da sua história?
          </h2>
        </div>
        <Link className="button-dark" href="/contato">
          Começar conversa
        </Link>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="section-shell">
      <SectionIntro
        eyebrow="FAQ"
        title="Perguntas frequentes antes de iniciar."
        text="Algumas respostas rapidas para entender prazos, acompanhamento e formato de atendimento."
      />
      <div className="mt-10 divide-y divide-stone-300 border-y border-stone-300">
        {faqs.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-serif text-2xl text-stone-950">
              {item.question}
              <span className="text-amber-800 transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-4 max-w-3xl leading-8 text-stone-600">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function ContactForm() {
  return (
    <section className="section-shell grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <SectionIntro
          eyebrow="Formulario"
          title="Conte sobre o projeto."
          text="Use o formulario para enviar contexto inicial. Retornamos com proximos passos e uma proposta de escopo."
        />
        <div className="mt-8 space-y-3 text-stone-600">
          <p>contato@atelierviga.com</p>
          <p>+55 11 94000-1820</p>
          <p>Atendimento de segunda a sexta, 9h as 18h.</p>
        </div>
      </div>
      <form className="grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            Nome
            <input className="field-input" placeholder="Seu nome" />
          </label>
          <label className="field-label">
            Email
            <input className="field-input" type="email" placeholder="voce@email.com" />
          </label>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="field-label">
            Tipo de projeto
            <select className="field-input" defaultValue="">
              <option value="" disabled>
                Selecione
              </option>
              {services.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="field-label">
            Cidade
            <input className="field-input" placeholder="Cidade / UF" />
          </label>
        </div>
        <label className="field-label">
          Mensagem
          <textarea
            className="field-input min-h-40 resize-y"
            placeholder="Fale sobre metragem, prazo, estilo desejado e fase atual."
          />
        </label>
        <button className="button-dark w-full sm:w-fit" type="submit">
          Enviar briefing
        </button>
      </form>
    </section>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="px-5 pb-16 pt-36 sm:px-8 lg:pt-44">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-800">
          Atelier Viga
        </p>
        <h1 className="mt-5 max-w-5xl font-serif text-5xl leading-tight text-stone-950 sm:text-7xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600">{text}</p>
      </div>
    </section>
  );
}
