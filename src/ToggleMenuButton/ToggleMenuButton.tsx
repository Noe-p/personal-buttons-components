import React from 'react';
import styled from 'styled-components';

export interface ToggleMenuButtonProps {
  isMenuOpen: boolean;
  onClick: () => void;

  colorOpen?: string;
  colorClose?: string;
  width?: number;
  spaceBetweenBars?: string;
  barThickness?: number;
  animationDuration?: string;
  mobileWidth?: number;
  mobileBarThickness?: number;
}

export function ToggleMenuButton(props: ToggleMenuButtonProps): JSX.Element {
  const {
    isMenuOpen,
    onClick,
    colorOpen = 'black',
    colorClose = 'black',
    width = 40,
    spaceBetweenBars = '35%',
    barThickness = 3,
    animationDuration = '0.3s',
    mobileBarThickness = 2,
    mobileWidth = 30,
  } = props;

  return (
    <MenuButton
      $mobileWidth={mobileWidth}
      $mobileBarThickness={mobileBarThickness}
      $isMenuOpen={isMenuOpen}
      $colorOpen={colorOpen}
      $colorClose={colorClose}
      $width={width}
      $spaceBetweenBars={spaceBetweenBars}
      $barThickness={barThickness}
      $animationDuration={animationDuration}
      onClick={onClick}
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
  $spaceBetweenBars: string;
  $barThickness: number;
  $animationDuration: string;
  $mobileWidth: number;
  $mobileBarThickness: number;
}

const MenuButton = styled.a`
  display: flex;
  height: ${(props: StyledProps) => props.$width}px;
  width: ${(props: StyledProps) => props.$width}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media (max-width: 750px) {
    height: ${(props: StyledProps) => props.$mobileWidth}px;
    width: ${(props: StyledProps) => props.$mobileWidth}px;
  }

  &:hover {
    cursor: pointer;
  }

  .container {
    position: relative;
    height: ${(props: StyledProps) =>
      props.$isMenuOpen ? '100%' : props.$spaceBetweenBars};
    width: 100%;

    .topBorder,
    .bottomBorder {
      position: absolute;
      content: '';
      display: block;
      width: 100%;
      height: ${(props: StyledProps) => props.$barThickness}px;
      background-color: ${(props: StyledProps) =>
        props.$isMenuOpen ? props.$colorOpen : props.$colorClose};
      transform: translateY(-50%) rotate(0);
      transition-duration: ${(props: StyledProps) => props.$animationDuration};
      transition-property: transform, background-color;

      @media (max-width: 750px) {
        height: ${(props: StyledProps) => props.$mobileBarThickness}px;
      }
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
