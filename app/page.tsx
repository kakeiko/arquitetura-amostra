import {
  AboutStudio,
  BudgetCta,
  ContactForm,
  Differentials,
  Faq,
  HeroMinimal,
  PortfolioPreview,
  Testimonials,
  WorkProcess,
} from "./components";

export default function Home() {
  return (
    <>
      <HeroMinimal />
      <PortfolioPreview />
      <AboutStudio />
      <WorkProcess />
      <Differentials />
      <Testimonials />
      <BudgetCta />
      <Faq />
      <ContactForm />
    </>
  );
}
