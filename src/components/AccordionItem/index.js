import { useState } from "react";
import { useRef } from "react";
import { AccordionItemWrapper, AccordionMaterialsWrapper, Answer, AnswerWrapper, Button, Control, Img } from "../Accordion/style";
import SetaUp from "../../assets/images/seta1.png";
import SetaDown from "../../assets/images/seta2.png";
import AccordionMaterialsItem from "../AccordionMaterials";

export default function AccordionItem({ faq }) {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { course_period, course_materials } = faq;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <AccordionItemWrapper>
      <Button onClick={handleToggle}>
        {course_period}
        <Control>{clicked ? <Img src={SetaUp} width="20" /> : <Img src={SetaDown} width="20" />}</Control>
      </Button>

      <AnswerWrapper
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >{course_materials.length === 0
        ? <h2>Não tem prova para nenhuma categoria para essa disciplina!</h2>
        : <AccordionMaterialsWrapper>
          {course_materials.map((materials, index) => (
            <>
              <AccordionMaterialsItem key={index} materials={materials} />
            </>
          ))}
        </AccordionMaterialsWrapper>}


        <Answer>
        </Answer>
      </AnswerWrapper>
    </AccordionItemWrapper>
  );
};
