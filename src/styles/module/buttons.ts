import styled from 'styled-components';

export const AvaliationButton = styled.button.attrs(
  (props: { backgroundColor: string }) => props
)`
  border-radius: 8px;
  border: 1px solid var(--main);
  background-color: ${(props: any) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  width: 40px;
  height: 40px;
  color: ${(props: any) =>
    props.backgroundColor === 'var(--main)'
      ? 'var(--backgroundColor)'
      : 'var(--main)'};
  cursor: pointer;

  svg {
    font-size: 14px;
  }
`;

export const Button = styled.button.attrs(
  (props: { typeButton: string; color: string }) => props
)`
  height: 40px;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;

  background-color: ${(props: any) =>
    props.typeButton === 'primary'
      ? props.color ?? 'var(--main)'
      : 'transparent'};

  color: ${(props: any) =>
    props.typeButton === 'primary' ? 'var(--backgroundColor)' : props.color};

  border-color: ${(props: any) =>
    props.typeButton === 'secondary'
      ? props.color ?? 'var(--main)'
      : 'transparent'};
`;
