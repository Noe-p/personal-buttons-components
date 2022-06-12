import React from 'react';
import styled from 'styled-components';

export interface ToggleMenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (ele: boolean) => void;

  colorOpen?: string;
  colorClose?: string;
  width?: number;
  spaceBetweenBorder?: string;
  borderWidth?: number;
  animationDuration?: string;
}

export function ToggleMenuButton(props: ToggleMenuButtonProps): JSX.Element {
  const {
    isMenuOpen,
    setIsMenuOpen,
    colorOpen = 'black',
    colorClose = 'black',
    width = 40,
    spaceBetweenBorder = '35%',
    borderWidth = 3,
    animationDuration = '0.3s',
  } = props;

  return (
    <MenuButton
      $isMenuOpen={isMenuOpen}
      $colorOpen={colorOpen}
      $colorClose={colorClose}
      $width={width}
      $spaceBetweenBorder={spaceBetweenBorder}
      $borderWidth={borderWidth}
      $animationDuration={animationDuration}
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      <div className="container">
        <div className={`topBorder ${isMenuOpen ? 'isOpen' : ''}`} />
        <div className={`bottomBorder ${isMenuOpen ? 'isOpen' : ''}`} />
      </div>
    </MenuButton>
  );
}

interface StyledProps {
  $isMenuOpen: boolean;
  $colorOpen: string;
  $colorClose: string;
  $width: number;
  $spaceBetweenBorder: string;
  $borderWidth: number;
  $animationDuration: string;
}

const MenuButton = styled.a`
  display: flex;
  height: ${(props: StyledProps) => props.$width}px;
  width: ${(props: StyledProps) => props.$width}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }

  .container {
    position: relative;
    height: ${(props: StyledProps) =>
      props.$isMenuOpen ? '100%' : props.$spaceBetweenBorder};
    width: 100%;

    .topBorder,
    .bottomBorder {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: ${(props: StyledProps) => props.$borderWidth}px;
      background-color: ${(props: StyledProps) =>
        props.$isMenuOpen ? props.$colorOpen : props.$colorClose};
      transform: translateY(-50%) rotate(0);
      transition-duration: ${(props: StyledProps) => props.$animationDuration};
      transition-property: transform, background-color;
    }

    .topBorder {
      top: 0;

      &.isOpen {
        transform: translateY(-50%) rotate(45deg);

        top: 50%;
      }
    }

    .bottomBorder {
      top: 100%;

      &.isOpen {
        transform: translateY(-50%) rotate(-45deg);

        top: 50%;
      }
    }
  }
`;
