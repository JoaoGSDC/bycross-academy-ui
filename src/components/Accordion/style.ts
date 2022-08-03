import styled from 'styled-components';

export const AccordionContainer = styled.div`
  margin-bottom: 16px;
  border: 1px solid #202d36;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding: 16px;

  hr {
    border-color: #202d36;
    width: 100%;
  }
`;

export const AccordionButton = styled.button`
  color: #fff;
  font-size: 11px;
  font-weight: 700;
  border: none;
  background-color: var(--backgroundColor);
  height: 35px;
  width: 100%;
  padding: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  cursor: pointer;

  &:focus {
    outline: 0;
  }
`;

export const AccordionBody = styled.div.attrs(
  (props: { maxHeight: number }) => props
)`
  max-height: ${(props: any) => `${props.maxHeight}px`};

  background-color: var(--backgroundColor);
  width: 100%;
  padding: 0px 8px;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  transition: max-height 0.3s ease-out;
  transition-delay: 0s;
`;

export const TextContainer = styled.div`
  display: flex;
  text-align: left;

  h2,
  h4 {
    margin: 0px;
  }

  h4 {
    color: #8d8d99;
  }
`;

export const Block = styled.div.attrs(
  (props: { backgroundColor: string; color: string }) => props
)`
  height: 40px;
  width: 40px;
  border: 1px solid var(--main);
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  color: ${(props: any) => props.color ?? 'var(--main)'};
  background-color: ${(props: any) => props.backgroundColor ?? 'transparent'};
`;

export const TitleTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: space-between;
`;
