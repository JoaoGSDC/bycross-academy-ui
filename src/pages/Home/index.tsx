import React from 'react';
import { AiOutlineClockCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { FaCode } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Bullet,
  Container,
  CourseCard,
  CoursesCardContainer,
  CoursesContainer,
  FigureContainer,
  Searching,
  SubTextsContainer,
  TechContainer,
  TextContainer,
} from './styles';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <TechContainer>
          <h1>Tecnologias</h1>

          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Todas
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Javascript
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            React JS
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Angular
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Node JS
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            React Native
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Python
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Flutter
          </span>
          <span>
            <Bullet>
              <FaCode />
            </Bullet>
            Banco de Dados
          </span>
        </TechContainer>

        <CoursesContainer>
          <Searching type="text" placeholder="Pesquisar curso..." />

          <CoursesCardContainer>
            <CourseCard onClick={() => navigate('/course/1')}>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard onClick={() => navigate('/course/1')}>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>

            <CourseCard>
              <FigureContainer>
                <img
                  src="https://programadoresbrasil.com.br/wp-content/uploads/2020/07/reactjs-logo-1-scaled.jpg"
                  alt="course"
                />
              </FigureContainer>

              <TextContainer>
                <h3>Conceitos básicos: React JS</h3>

                <SubTextsContainer>
                  <h5>
                    <AiOutlineClockCircle /> 2 horas
                  </h5>

                  <h5>
                    <AiOutlineInfoCircle /> Básico
                  </h5>
                </SubTextsContainer>
              </TextContainer>
            </CourseCard>
          </CoursesCardContainer>
        </CoursesContainer>
      </Container>
    </>
  );
}

export default Home;
