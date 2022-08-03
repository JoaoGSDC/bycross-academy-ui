import React, { useEffect, useState } from 'react';
import { RiChatSmile3Fill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import logo from '../../assets/images/logo_bycross.png';
import { Container, TitleContainer } from './styles';

function Authentication() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const user: any = JSON.parse(String(localStorage.getItem('user')));

  useEffect(() => {
    const token = user?.token ?? '';

    /* if (token !== '') {
      navigate('/');
    } */
  }, [navigate, user?.token]);

  return (
    <Container>
      <TitleContainer>
        <img src={logo} alt="logo" />
        <h3>Seja muito bem vindo ao Academy!</h3>
      </TitleContainer>

      {isLogin ? (
        <>
          <Login onOpenRegistration={setIsLogin} />
        </>
      ) : (
        <>
          <Registration onOpenLogin={setIsLogin} />
        </>
      )}
    </Container>
  );
}

export default Authentication;
