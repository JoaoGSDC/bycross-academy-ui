import React, { useState } from 'react';
import {
  Container,
  ImgUserContainer,
  Option,
  Select,
  TextUserContainer,
  UserContainer,
} from './styles';
import img from '../../assets/images/img.png';
import { useNavigate } from 'react-router-dom';

function User() {
  const navigate = useNavigate();
  const [displayOptions, setDisplayOptions] = useState<boolean>(false);

  function handleLogout() {
    navigate('/login');
  }

  return (
    <Container>
      <UserContainer onClick={() => setDisplayOptions((display) => !display)}>
        <TextUserContainer>
          <h5>Steve Jobs</h5>
          <h6>FullStack Developer</h6>
        </TextUserContainer>

        <ImgUserContainer>
          <img src={img} alt="user" />
        </ImgUserContainer>
      </UserContainer>

      {displayOptions ? (
        <Select>
          <Option>Perfil</Option>
          <Option onClick={() => handleLogout()}>Sair</Option>
        </Select>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default User;
