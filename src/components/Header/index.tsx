import React from 'react';
import logo from '../../assets/images/logo_bycross.png';
import { HeaderContainer } from './styles';
import User from '../User';
import { useLocation, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();
  const localition = useLocation();

  return (
    <>
      {localition.pathname !== '/login' ? (
        <HeaderContainer>
          <img src={logo} alt="logo" onClick={() => navigate('/')} />

          <User />
        </HeaderContainer>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
