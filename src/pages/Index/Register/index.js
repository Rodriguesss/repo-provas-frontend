import Logo from "../../../assets/images/Logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
//import useAuth from '../../../hooks/useAuth';

import Form from '../../../components/Form';
import LinkToogle from '../../../components/LinkToogle';
import { Button, Container, Img, InputWrapper, Input } from "../style"
import services from "../../../services/services";

export default function Login() {
  const navigate = useNavigate();
  //const { login } = useAuth();
  const { register, handleSubmit } = useForm();

  async function singUp(data) {
    try {
      await services.register(data);

      navigate('/');
    } catch {
      alert('Usuário ou senha inválidos.');
    }
  }

  return (
    <Container>
      <Img src={Logo} width="292" />

      <Form onSubmit={handleSubmit((data) => singUp(data))}>
        <Input {...register("email")} type="text" placeholder="Email" />
        <Input {...register("password")} type="password" placeholder="Senha" />
        <Input {...register("password_confirmation")} type="password" placeholder="Confirmar senha" />

        <InputWrapper>
          <LinkToogle register={true} path="/" />
          <Button type="submit">CADASTRAR</Button>
        </InputWrapper>
      </Form>


    </Container>
  )
}
