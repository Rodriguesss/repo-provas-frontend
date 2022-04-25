//Credito :) https://blog.logrocket.com/how-to-build-a-react-accordion-menu-from-scratch/

import styled from "styled-components";

const AccordionWrapper = styled.ul`
  background-color: #FFF;
  width: 50%;

  list-style: none;

  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
`

const AccordionMaterialsWrapper = styled.ul`
  margin: 0 20px;
  background-color: #FFF;

  list-style: none;
`

const AccordionItemWrapper = styled.li`
`

const Button = styled.button`
  font-size: 16px;
  background-color: #FFF;
  color: rgba(0, 0, 0, 0.8);
  text-align: left;
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 18px 18px;
  cursor: pointer;
  border: none;
`

const Control = styled.span`
  font-size: 20px;
`

const Answer = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 200;
`

const AnswerWrapper = styled.div`
  height: 0;
  overflow: hidden;

  .open {
    height: auto;
  }
`

const AnswerMaterialWrapper = styled.div`
  height: 0;
  overflow: hidden;

  .open {
    height: auto;
  }
`

const Img = styled.img`
  margin: 0 20px;

  cursor: pointer;
`

const TestTypeName = styled.h2`
  margin-bottom: 10px;
`

export {
  AccordionWrapper,
  AccordionItemWrapper,
  AccordionMaterialsWrapper,
  AnswerMaterialWrapper,
  Button,
  Control,
  Answer,
  AnswerWrapper,
  TestTypeName,
  Img
}