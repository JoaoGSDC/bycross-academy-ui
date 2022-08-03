import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
`;

export const TextUserContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 8px;
  text-align: right;
  justify-content: space-between;
  padding: 8px 0px;

  h5,
  h6 {
    margin: 0px;
    color: #c4c4cc;
  }

  h5 {
    font-weight: 700;
  }
`;

export const UserContainer = styled.div`
  display: flex;

  &:hover {
    cursor: pointer;
  }
`;

export const ImgUserContainer = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  position: relative;
  border: 2px solid var(--main);
  border-radius: 8px;
  padding: 2px;
`;

export const Select = styled.div`
  position: absolute;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  right: 0px;
  top: 48px;
  background-color: #223039;
  padding: 8px;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 50%);
  border-radius: 8px;
`;

export const Option = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;

  &:hover {
    cursor: pointer;
    color: var(--main);
  }
`;
