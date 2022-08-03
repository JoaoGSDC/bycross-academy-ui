import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import professor from '../../assets/images/professor.jpg';
import Accordion from '../../components/Accordion';
import Modal from '../../components/Modal';
import { AvaliationButton, Button } from '../../styles/module/buttons';
import {
  CourseContainer,
  FrameContainer,
  LearnContainer,
  ModulesContainer,
  SidesContainer,
  TeacherContainer,
  TeacherImgContainer,
  TeacherTextContainer,
  TitleContainer,
  VideoContainer,
  ListContainer,
} from './styles';

function Course() {
  const [openChallenge, setOpenChallenge] = useState(false);
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);

  function handleUpdateAvaliation(type: number) {
    if (type === 1 && (dislike || !like)) {
      setLike(true);
      setDislike(false);
      return;
    }

    if (type === 0 && (like || !dislike)) {
      setLike(false);
      setDislike(true);
      return;
    }

    setLike(false);
    setDislike(false);
  }

  return (
    <>
      <CourseContainer>
        <h1>Introdução ao JavaScript</h1>

        <SidesContainer>
          <VideoContainer>
            <FrameContainer>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1sIwGk7-0uQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </FrameContainer>

            <TitleContainer>
              <h3>Emojis: diversidade e inclusão</h3>

              <div>
                <AvaliationButton
                  type="button"
                  backgroundColor={like ? 'var(--main)' : 'transparent'}
                  onClick={() => handleUpdateAvaliation(1)}
                >
                  <AiOutlineLike />
                </AvaliationButton>

                <AvaliationButton
                  type="button"
                  backgroundColor={dislike ? 'var(--main)' : 'transparent'}
                  onClick={() => handleUpdateAvaliation(0)}
                >
                  <AiOutlineDislike />
                </AvaliationButton>
              </div>
            </TitleContainer>

            <p>
              Usar emojis pode parecer algo simples, mas alguns cuidados são
              importantes para manter a voz da marcar. Você também vai aprender
              as melhores práticas de design e acessibilidade no uso de emojis.
            </p>

            <LearnContainer>
              <TeacherContainer>
                <TeacherImgContainer>
                  <img src={professor} alt="professor" />
                </TeacherImgContainer>

                <TeacherTextContainer>
                  <h3>João Gabriel</h3>
                  <h6>CEO na ByCross</h6>
                </TeacherTextContainer>
              </TeacherContainer>

              <Button
                type="button"
                typeButton="secondary"
                color="#00B37E"
                onClick={() => setOpenChallenge(true)}
              >
                ACESSE O DESAFIO
              </Button>
            </LearnContainer>
          </VideoContainer>

          <ModulesContainer>
            <Accordion text="Módulo 1" subtext="5 aulas" block="1">
              <ListContainer>
                <ul>
                  <li>Mensagens de erro</li>
                  <li>Tooltips</li>
                  <li>Emojis: diversidade e inclusão</li>
                  <li>Descrevendo imagens com atributo ALT do HTML </li>
                  <li>Escrevendo links</li>
                </ul>
              </ListContainer>
            </Accordion>

            <Accordion text="Módulo 2" subtext="5 aulas" block="2">
              <ListContainer>
                <ul>
                  <li>Mensagens de erro</li>
                  <li>Tooltips</li>
                  <li>Emojis: diversidade e inclusão</li>
                  <li>Descrevendo imagens com atributo ALT do HTML </li>
                  <li>Escrevendo links</li>
                </ul>
              </ListContainer>
            </Accordion>

            <Accordion text="Módulo 3" subtext="5 aulas" block="3">
              <ListContainer>
                <ul>
                  <li>Mensagens de erro</li>
                  <li>Tooltips</li>
                  <li>Emojis: diversidade e inclusão</li>
                  <li>Descrevendo imagens com atributo ALT do HTML </li>
                  <li>Escrevendo links</li>
                </ul>
              </ListContainer>
            </Accordion>
          </ModulesContainer>
        </SidesContainer>
      </CourseContainer>

      <Modal
        title="Desafio Módulo #1"
        open={openChallenge}
        onClose={() => setOpenChallenge(false)}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio
          ut erat sodales malesuada quis vitae diam. Donec a tellus fermentum,
          mollis augue et, congue lorem. Donec dapibus leo at tincidunt gravida.
          Maecenas sit amet massa at leo faucibus feugiat et id orci. Duis massa
          lorem, suscipit eget maximus vel, vestibulum porta neque. Fusce non
          justo metus. Fusce eget semper quam. Phasellus mollis malesuada erat
          nec ultricies. Phasellus eget enim massa. Donec vulputate tincidunt
          elit, ac pretium elit. Phasellus faucibus sem fringilla purus
          sollicitudin, sed porttitor erat hendrerit. Sed consequat risus non
          massa volutpat sagittis. Mauris libero sem, blandit vel faucibus ut,
          egestas ac tortor. Vivamus velit libero, viverra sed laoreet
          vulputate, varius in felis. Fusce quis ipsum libero. Aliquam quis
          accumsan sapien.
        </p>

        <p>
          Cras feugiat commodo blandit. Nam imperdiet justo sit amet feugiat
          blandit. Pellentesque placerat magna ut placerat venenatis. Ut a ante
          eros. Ut facilisis elementum cursus. In eu lacinia metus, quis
          condimentum ligula. Vivamus fringilla fermentum lacus, in tempus enim
          imperdiet mollis. Ut lacus purus, ultrices cursus tristique eu,
          interdum vel ipsum. Duis condimentum vitae lorem vel elementum.
          Vestibulum luctus massa eu leo venenatis, sed posuere lacus varius.
          Quisque non aliquet eros. Phasellus ante diam, feugiat nec nibh id,
          sodales porttitor ipsum. Sed ac lorem laoreet, porttitor ex ultricies,
          cursus odio.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio
          ut erat sodales malesuada quis vitae diam. Donec a tellus fermentum,
          mollis augue et, congue lorem. Donec dapibus leo at tincidunt gravida.
          Maecenas sit amet massa at leo faucibus feugiat et id orci. Duis massa
          lorem, suscipit eget maximus vel, vestibulum porta neque. Fusce non
          justo metus. Fusce eget semper quam. Phasellus mollis malesuada erat
          nec ultricies. Phasellus eget enim massa. Donec vulputate tincidunt
          elit, ac pretium elit. Phasellus faucibus sem fringilla purus
          sollicitudin, sed porttitor erat hendrerit. Sed consequat risus non
          massa volutpat sagittis. Mauris libero sem, blandit vel faucibus ut,
          egestas ac tortor. Vivamus velit libero, viverra sed laoreet
          vulputate, varius in felis. Fusce quis ipsum libero. Aliquam quis
          accumsan sapien.
        </p>

        <p>
          Cras feugiat commodo blandit. Nam imperdiet justo sit amet feugiat
          blandit. Pellentesque placerat magna ut placerat venenatis. Ut a ante
          eros. Ut facilisis elementum cursus. In eu lacinia metus, quis
          condimentum ligula. Vivamus fringilla fermentum lacus, in tempus enim
          imperdiet mollis. Ut lacus purus, ultrices cursus tristique eu,
          interdum vel ipsum. Duis condimentum vitae lorem vel elementum.
          Vestibulum luctus massa eu leo venenatis, sed posuere lacus varius.
          Quisque non aliquet eros. Phasellus ante diam, feugiat nec nibh id,
          sodales porttitor ipsum. Sed ac lorem laoreet, porttitor ex ultricies,
          cursus odio.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio
          ut erat sodales malesuada quis vitae diam. Donec a tellus fermentum,
          mollis augue et, congue lorem. Donec dapibus leo at tincidunt gravida.
          Maecenas sit amet massa at leo faucibus feugiat et id orci. Duis massa
          lorem, suscipit eget maximus vel, vestibulum porta neque. Fusce non
          justo metus. Fusce eget semper quam. Phasellus mollis malesuada erat
          nec ultricies. Phasellus eget enim massa. Donec vulputate tincidunt
          elit, ac pretium elit. Phasellus faucibus sem fringilla purus
          sollicitudin, sed porttitor erat hendrerit. Sed consequat risus non
          massa volutpat sagittis. Mauris libero sem, blandit vel faucibus ut,
          egestas ac tortor. Vivamus velit libero, viverra sed laoreet
          vulputate, varius in felis. Fusce quis ipsum libero. Aliquam quis
          accumsan sapien.
        </p>

        <p>
          Cras feugiat commodo blandit. Nam imperdiet justo sit amet feugiat
          blandit. Pellentesque placerat magna ut placerat venenatis. Ut a ante
          eros. Ut facilisis elementum cursus. In eu lacinia metus, quis
          condimentum ligula. Vivamus fringilla fermentum lacus, in tempus enim
          imperdiet mollis. Ut lacus purus, ultrices cursus tristique eu,
          interdum vel ipsum. Duis condimentum vitae lorem vel elementum.
          Vestibulum luctus massa eu leo venenatis, sed posuere lacus varius.
          Quisque non aliquet eros. Phasellus ante diam, feugiat nec nibh id,
          sodales porttitor ipsum. Sed ac lorem laoreet, porttitor ex ultricies,
          cursus odio.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut odio
          ut erat sodales malesuada quis vitae diam. Donec a tellus fermentum,
          mollis augue et, congue lorem. Donec dapibus leo at tincidunt gravida.
          Maecenas sit amet massa at leo faucibus feugiat et id orci. Duis massa
          lorem, suscipit eget maximus vel, vestibulum porta neque. Fusce non
          justo metus. Fusce eget semper quam. Phasellus mollis malesuada erat
          nec ultricies. Phasellus eget enim massa. Donec vulputate tincidunt
          elit, ac pretium elit. Phasellus faucibus sem fringilla purus
          sollicitudin, sed porttitor erat hendrerit. Sed consequat risus non
          massa volutpat sagittis. Mauris libero sem, blandit vel faucibus ut,
          egestas ac tortor. Vivamus velit libero, viverra sed laoreet
          vulputate, varius in felis. Fusce quis ipsum libero. Aliquam quis
          accumsan sapien.
        </p>

        <p>
          Cras feugiat commodo blandit. Nam imperdiet justo sit amet feugiat
          blandit. Pellentesque placerat magna ut placerat venenatis. Ut a ante
          eros. Ut facilisis elementum cursus. In eu lacinia metus, quis
          condimentum ligula. Vivamus fringilla fermentum lacus, in tempus enim
          imperdiet mollis. Ut lacus purus, ultrices cursus tristique eu,
          interdum vel ipsum. Duis condimentum vitae lorem vel elementum.
          Vestibulum luctus massa eu leo venenatis, sed posuere lacus varius.
          Quisque non aliquet eros. Phasellus ante diam, feugiat nec nibh id,
          sodales porttitor ipsum. Sed ac lorem laoreet, porttitor ex ultricies,
          cursus odio.
        </p>
      </Modal>
    </>
  );
}

export default Course;
