import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MainMenu from './MainMenu';
import Burger from './Burger';

import styled from 'styled-components';

const Nav = styled.nav`
  color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  font-size: 1.1rem;

  .container {
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .logo {
      padding: 15px 0;

      a {
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 4px;
        color: #fff;
        cursor: default;
      }
    }
  }
`


const Navbar = (props) => {
  // use hooks to handle open navbar
  const [ open, setOpen ] = useState(false);

  return (
    <Nav>
      <div className="container">
        <div className="logo" >
          <NavLink to="/">Golden Frames</NavLink>
        </div>
        <div>
        <Burger open={open} setOpen={setOpen}/>
        <MainMenu open={open} setOpen={setOpen}/>
        </div>
      </div>
    </Nav>
  )
}

export default Navbar
