import { ContactForm, Faq, PageHero } from "../components";

export default function ContatoPage() {
  return (
    <>
      <PageHero
        title="Vamos conversar sobre escopo, prazo e investimento."
        text="Envie as primeiras informacoes do projeto. A partir delas, montamos uma proposta com etapas, entregaveis e formato de acompanhamento."
      />
      <ContactForm />
      <Faq />
    </>
  );
}
