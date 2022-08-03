import styled from 'styled-components';

export const CourseContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 32px 0px;

  h1 {
    margin-top: 0px;
  }
`;

export const FrameContainer = styled.div`
  display: flex;
  height: 592px;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const SidesContainer = styled.div`
  display: flex;
`;

export const VideoContainer = styled.div`
  flex: 1;
  margin-right: 16px;

  h3 {
    width: 100%;
    margin: 0px;
    color: #e1e1e6;
  }

  p {
    color: #c4c4cc;
    font-size: 0.875rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
  align-items: center;
  margin-top: 16px;

  div {
    margin: auto;
    display: flex;

    button:first-of-type {
      margin-right: 8px;
    }
  }
`;

export const ModulesContainer = styled.div`
  width: 350px;

  display: flex;
  flex-direction: column;
  max-height: 650px;
  overflow: auto;

  padding-right: 8px;

  * {
    scrollbar-width: auto;
    scrollbar-color: #323238 transparent;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #323238;
    border-radius: 10px;
    border: 3px solid transparent;
  }
`;

export const TeacherContainer = styled.div`
  display: flex;
`;

export const TeacherImgContainer = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 2px solid var(--main);
  margin-right: 8px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export const TeacherTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3,
  h6 {
    margin: 0px;
  }

  h3 {
    color: #e1e1e6;
  }

  h6 {
    color: #a8a8b3;
  }
`;

export const LearnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px 0px;
`;

export const ListContainer = styled.div`
  ul {
    list-style-type: none;
    margin-left: -30px;

    li {
      color: #8d8d99;
      margin: 16px 0px;
      font-size: 0.875rem;

      transition: 0.2s;

      &:hover {
        cursor: pointer;
        color: #8d8d9980;
      }
    }
  }
`;
