import React from 'react';
import styled from 'styled-components'

const StyledBurger = styled.div `
  width: 2rem;
  display: none;

    div {
      width: 2rem;
      height: 3px;
      background-color: #fff;
      margin: 6px 0;
      border-radius: 8px;
      transition: all 0.3s linear;
      transform-origin: 4px;

        &:nth-child(1) {
          transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2) {
          opacity: ${({ open }) => open ? '0' : '1' };
        }

        &:nth-child(3) {
          transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (max-width: 760px) {
      display: block;
    }
`

const Burger = (props) => {
  const { open, setOpen } = props;

  return (
    <StyledBurger open={ open } onClick={ () => setOpen( !open )} >
      <div />
      <div />
      <div />
    </StyledBurger>
  )
}

export default Burger
