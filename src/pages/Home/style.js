import styled from "styled-components";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    margin: 50px 80px;
`

const Img = styled.img`
  cursor: pointer;
`

const SearchBar = styled.input`
  width: 30%;
  padding: 10px 15px;

  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);

  ::placeholder {
    color: rgba(0, 0, 0, 0.6);
    font-weight: 600;
  }
`

const Divider = styled.div`
  width: 100vw;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;

  gap: 20px;
`

const Button = styled.button`
    padding: 10px;

    background-color: #FFF;
    color: #1976D2; 

    border-radius: 3px;
    border: 1px solid #1976D2;

    font-weight: bold;

    cursor: pointer;

    &:focus {
      background-color: #1976D2;
      color: #FFF;
    }
`

const ButtonWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`

export {
  Nav,
  Button,
  SearchBar,
  Img,
  Divider,
  HomeWrapper,
  ButtonWrapper,
}