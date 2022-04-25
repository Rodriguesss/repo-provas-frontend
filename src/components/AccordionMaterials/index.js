import { useState } from "react";
import { useRef } from "react";
import { AccordionItemWrapper, AccordionMaterialsWrapper, Answer, AnswerMaterialWrapper, Button, Control, Img, TestTypeName } from "../Accordion/style";
import SetaUp from "../../assets/images/seta1.png";
import SetaDown from "../../assets/images/seta2.png";

export default function AccordionMaterialsItem({ materials }) {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const { name, course_tests } = materials;

  const handleToggle = () => {
    setClicked((prev) => !prev);
  };

  return (
    <AccordionItemWrapper>
      <Button onClick={handleToggle}>
        {name}
        {console.log('esse aq', clicked)}
        <Control>{clicked ? <Img src={SetaUp} width="20" /> : <Img src={SetaDown} width="20" />}</Control>
      </Button>

      <AnswerMaterialWrapper
        ref={contentEl}
        style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <AccordionMaterialsWrapper>
          {course_tests.map((course_test, index) => (
            <>
              <TestTypeName key={index}>{course_test.type}</TestTypeName>
              {course_test.tests.map((test, index) => (
                <Answer key={index}>
                  {test.date} - {test.name} ({test.teacher})
                </Answer>
              ))}
            </>
          ))}
        </AccordionMaterialsWrapper>
      </AnswerMaterialWrapper>
    </AccordionItemWrapper>
  );
};
