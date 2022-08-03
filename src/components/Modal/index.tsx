import React from 'react';
import { Container, ModalBody, ModalContent, ModalHeader } from './styles';

interface IProps {
  title: string;
  children: any;
  open: boolean;
  onClose: any;
}

function Modal({ title, children, open, onClose }: IProps) {
  return (
    <>
      {open ? (
        <Container>
          <ModalContent>
            <ModalHeader>
              <h1>{title}</h1>

              <h2 onClick={() => onClose(true)}>X</h2>
            </ModalHeader>

            <ModalBody>{children}</ModalBody>
          </ModalContent>
        </Container>
      ) : (
        <></>
      )}
    </>
  );
}

export default Modal;
