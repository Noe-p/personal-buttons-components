import React, { CSSProperties } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

export interface ToggleTextButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;

  textOpen?: string;
  textClose?: string;
  animationSpeed?: number;
  animationOpacity?: string;
  fontSize?: string;
  fontFamily?: string;
  closeColor?: string;
  openColor?: string;
  animationTranslation?: string;
  mobileFontSize?: string;
  style?: CSSProperties;
}

export function ToggleTextButton(props: ToggleTextButtonProps): JSX.Element {
  const {
    isMenuOpen,
    onClick,
    textOpen = 'Menu',
    textClose = 'Close',
    animationSpeed = 0.2,
    animationOpacity = '50%',
    fontSize = '25px',
    fontFamily = 'serif',
    closeColor = 'black',
    openColor = 'black',
    animationTranslation = '100%',
    mobileFontSize = '20px',
    style,
  } = props;
  const textOpenArray = textOpen.toUpperCase().split('');
  const textCloseArray = textClose.toUpperCase().split('');

  const biggerText =
    textOpenArray.length > textCloseArray.length
      ? textOpenArray
      : textCloseArray;

  function TextAnimationCSS() {
    let styles = '';
    let duration = animationSpeed;
    biggerText.forEach((_char, i) => {
      styles += `
        p:nth-child(${i + 1}){
          animation-duration: ${duration}s;
        }
     `;
      duration += animationSpeed;
    });

    return css`
      ${styles}
    `;
  }

  return (
    <Main
      $animationOpacity={animationOpacity}
      $fontSize={fontSize}
      $fontFamily={fontFamily}
      $closeColor={closeColor}
      $openColor={openColor}
      $animationTranslation={animationTranslation}
      $mobileFontSize={mobileFontSize}
      $isMenuOpen={isMenuOpen}
      $textAnimationCSS={TextAnimationCSS}
      onClick={onClick}
      style={style}
    >
      <div className="textOpen">
        {textOpenArray.map((letter, i) => (
          <p key={i}>{letter}</p>
        ))}
      </div>
      <div className="textClose">
        {textCloseArray.map((letter, i) => (
          <p key={i}>{letter}</p>
        ))}
      </div>
    </Main>
  );
}

interface StyledProps {
  $isMenuOpen: boolean;
  $textAnimationCSS: () => FlattenSimpleInterpolation;
  $animationOpacity: string;
  $fontSize: string;
  $fontFamily: string;
  $closeColor: string;
  $openColor: string;
  $animationTranslation: string;
  $mobileFontSize: string;
}

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  .textOpen,
  .textClose {
    display: flex;
    position: absolute;
    transform: translateX(-50%);

    p {
      margin: 0;
      font-family: ${(props: StyledProps) => props.$fontFamily};
      font-size: ${(props: StyledProps) => props.$fontSize};

      @media (max-width: 750px) {
        font-size: ${(props: StyledProps) => props.$mobileFontSize};
      }
    }

    ${(props: StyledProps) => props.$textAnimationCSS};
  }

  .textOpen {
    p {
      color: ${(props: StyledProps) => props.$openColor};
      opacity: ${(props: StyledProps) => (props.$isMenuOpen ? '0' : '1')};
      animation: ${(props: StyledProps) =>
        props.$isMenuOpen ? 'translateYToTop' : 'translateYToBottom'};
    }
  }

  .textClose {
    p {
      color: ${(props: StyledProps) => props.$closeColor};
      opacity: ${(props: StyledProps) => (props.$isMenuOpen ? '1' : '0')};
      animation: ${(props: StyledProps) =>
        props.$isMenuOpen ? 'translateYToBottom' : 'translateYToTop'};
    }
  }

  @keyframes translateYToTop {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    ${(props: StyledProps) => props.$animationOpacity} {
      opacity: 1;
    }
    100% {
      transform: translateY(
        -${(props: StyledProps) => props.$animationTranslation}
      );
      opacity: 0;
    }
  }

  @keyframes translateYToBottom {
    0% {
      transform: translateY(
        ${(props: StyledProps) => props.$animationTranslation}
      );
      opacity: 0;
    }
    ${(props: StyledProps) => props.$animationOpacity} {
      opacity: 1;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
