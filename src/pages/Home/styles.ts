import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin: 32px;
`;

export const TechContainer = styled.div`
  flex: 1;

  h1 {
    margin: 0px;
    margin-bottom: 32px;
  }

  span {
    display: flex;
    align-items: center;
    margin-bottom: 32px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const CoursesContainer = styled.div`
  flex: 4;
`;

export const Bullet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #3efd6f;
  width: 28px;
  height: 28px;
  margin-right: 8px;
  color: #0f1519;
`;

export const Searching = styled.input`
  background-color: #080d10;
  border: none;
  border-radius: 8px;
  height: 40px;
  padding: 0px 16px;
  width: calc(100% - 32px);
  color: #fff;
  margin-bottom: 8px;
`;

export const CoursesCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const CourseCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  background-color: #080d10;
  padding: 16px;
  border-radius: 8px;
  height: 360px;
  margin: 8px 0px;

  &:hover {
    cursor: pointer;
  }
`;

export const FigureContainer = styled.figure`
  margin: 0px;
  overflow: hidden;
  height: 300px;

  img {
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  height: 80%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SubTextsContainer = styled.div`
  display: flex;

  h5 {
    display: flex;
    align-items: center;
    margin-right: 16px;
    color: #45525a;

    svg {
      margin-right: 4px;
    }
  }
`;
