import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.9);

  position: absolute;
  z-index: 12;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  min-height: 400px;
  max-width: 75%;
  max-height: 75%;
  padding: 32px;
  border-radius: 8px;
  background-color: var(--backgroundColor);
`;

export const ModalBody = styled.div`
  overflow: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h1,
  h2 {
    margin: 0px;
  }

  h2 {
    cursor: pointer;
  }
`;
