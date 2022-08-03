import React, { useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import {
  AccordionBody,
  AccordionButton,
  AccordionContainer,
  Block,
  TextContainer,
  TitleTextContainer,
} from './style';

interface IProps {
  text: string;
  subtext: string;
  block?: string;
  children: any;
  isOpen?: boolean;
}

function Accordion({
  children,
  text,
  subtext,
  block = '',
  isOpen = true,
}: IProps) {
  const [open, setOpen] = useState(isOpen);

  function handleOpenClick() {
    setOpen((op) => !op);
  }

  return (
    <>
      <AccordionContainer>
        <AccordionButton type="button" onClick={() => handleOpenClick()}>
          <TextContainer>
            {block !== '' ? <Block>{block}</Block> : <></>}
            <TitleTextContainer>
              <h2>{text}</h2>
              {subtext ? <h4>{subtext}</h4> : <></>}
            </TitleTextContainer>
          </TextContainer>

          <div>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
        </AccordionButton>

        <AccordionBody maxHeight={open ? 900 : 0}>
          <hr />
          {children}
        </AccordionBody>
      </AccordionContainer>

      {/* <div class="container-accordion">
  <button class="accordion-button" type="button" (click)="handleOpenClick()">
    <span>{{ title }}</span>

    <div class="complement-items">
      <div class="counter">
        {{ counter }}
      </div>

      <i class="fas fa-plus" *ngIf="!open"></i>
      <i class="fas fa-minus" *ngIf="open"></i>
    </div>
  </button>

  <div class="accordion" [ngStyle]="{ 'max-height': open ? '900px' : '0px' }">
    <ng-content></ng-content>
  </div> 
</div>*/}
    </>
  );
}

export default Accordion;
