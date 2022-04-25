import AccordionItem from "../AccordionItem";
import { AccordionWrapper } from "./style";

export default function Accordion({ faqs }) {
  return (
    <AccordionWrapper>
      {faqs.map((faq, index) => (
        <>
        {console.log('Periodo com as Materias', faq)}
          <AccordionItem key={index} faq={faq} />
        </>
      ))}
    </AccordionWrapper>
  );
}