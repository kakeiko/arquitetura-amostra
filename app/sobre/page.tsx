import { AboutStudio, BudgetCta, Differentials, PageHero, WorkProcess } from "../components";

export default function SobrePage() {
  return (
    <>
      <PageHero
        title="Arquitetura com escuta, desenho preciso e obra bem orientada."
        text="O Atelier Viga atua como um escritório boutique, conduzindo poucos projetos por vez para manter proximidade, consisténcia e controle de qualidade."
      />
      <AboutStudio />
      <Differentials />
      <WorkProcess />
      <BudgetCta />
    </>
  );
}
