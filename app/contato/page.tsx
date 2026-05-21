import { ContactForm, Faq, PageHero } from "../components";

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Vamos conversar sobre escopo, prazo e investimento."
        text="Envie as primeiras informações do projeto. A partir delas, montamos uma proposta com etapas, entregáveis e formato de acompanhamento."
      />
      <ContactForm />
      <Faq />
    </>
  );
}
