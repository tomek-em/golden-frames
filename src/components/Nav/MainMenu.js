import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;

    li {
      cursor: pointer;

        a {
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 65px;
          padding: 0 1rem;
          color: #fff;
        }
    }

    li a:hover {
      color: #ddd;
    }

  @media (max-width: 760px) {

    flex-direction: column;
    justify-content: flex-start;
    background-color: #557E96;
    position: fixed;
    top: 65px;
    right: 0;
    min-height: 100px;
    width: 100%;
    padding: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(110%)'};
    transition: all ${({ open }) => open ? '0.4s' : '0'} ease-in-out;

      li {
        text-align: center;
        opacity: ${({ open }) => open ? '1' : '0'};
        transition: opacity 0.6s ease-in;
      }
  }
`

const MainMenu = ({ open, setOpen }) => {

  return (
    <Ul open={ open } onClick={ () => setOpen( !open )} >
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </Ul>
  )
}

export default MainMenu
