import { Nav, Img, SearchBar, Divider, HomeWrapper, Button, ButtonWrapper } from "./style";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/images/Logo.png";
import Logout from "../../assets/images/logout.png";
import useAuth from "../../hooks/useAuth";
import Accordion from "../../components/Accordion/Index";

export default function Home() {
  const [option, setOption] = useState("disciplinas");
  const { logout } = useAuth();
  const navigate = useNavigate();

  /*const faqs2 = [
    {
      course_period: '10º Periodo',
      course_materials: [{
        name: 'CSS',
        course_tests: [
          {
            type: 'P1', tests: [
              { name: 'Globo.com', date: '2021.1', teacher: 'Pedrão' },
              { name: 'Uol.com', date: '2021.1', teacher: 'Pedrão' }
            ],
          }
        ]
      },
      {
        name: 'JavaScript',
        course_tests: [
          {
            type: 'P1', tests: [
              { name: 'Wallet', date: '2022.1', teacher: 'Dina' },
              { name: 'BoardCamp', date: '2022.2', teacher: 'Dina' }
            ]
          }
        ]
      }]
    },
    {
      course_period: '9º Periodo',
      course_materials: [{
        name: 'HTML',
        course_tests: [
          {
            type: 'P1', tests: [
              { name: 'Parrots', date: '2021.2', teacher: 'Bruna Hamori' },
              { name: 'BussQuiz', date: '2021.3', teacher: 'Dina' }]
          },
          {
            type: 'P2', tests: [
              { name: 'Parrots React', date: '2022.5', teacher: 'Dina' },
              { name: 'BussQuiz React', date: '2021.6', teacher: 'Pedrão' }]
          }
        ]
      }]
    }
  ]*/

  const faqs = [
    {
      course_period: '10º Periodo',
      course_materials: [{
        name: 'CSS',
        course_tests: [
          {
            type: 'P1', tests: [
              { name: 'Globo.com', date: '2021.1', teacher: 'Pedrão' },
              { name: 'Uol.com', date: '2021.1', teacher: 'Pedrão' }
            ],
          }
        ]
      }]
    }
  ]

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <>
      <Nav>
        <Img src={Logo} width="292" />
        <Img src={Logout} width="30" onClick={handleLogout} />
      </Nav>

      <HomeWrapper>
        <SearchBar placeholder={`Pesquise por ${option}`} />
        <Divider />

        <ButtonWrapper>
          <Button onClick={() => setOption("disciplinas")}>DISCIPLINAS</Button>
          <Button onClick={() => setOption("pessoa instrutora")}>PESSOA INSTRUTORA</Button>
          <Button>ADICIONAR</Button>
        </ButtonWrapper>

        {/*<Accordion faqs={faqs2} />*/}
        <Accordion faqs={faqs} />
      </HomeWrapper>
    </>
  )
}