import styled from "styled-components";

const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 200px;
`

const Img = styled.img``

const InputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Button = styled.button`
    width: 25%;

    padding: 10px;

    background-color: #1976D2;
    color: #FFF; 

    border-radius: 3px;
    border: unset;

    font-weight: bold;

    cursor: pointer;
`
const Input = styled.input`
  width: 100%;

  padding: 18px 0 17px 15px;

  background-color: #FFF;

  border: 1px solid  rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
  }
`

export {
    Img,
    Input,
    Button,
    Container,
    InputWrapper,
}