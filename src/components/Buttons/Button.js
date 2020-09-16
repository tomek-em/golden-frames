import React from 'react';

import styled from 'styled-components';

const Btn = styled.a`
  padding: 12px 2rem;
  display: inline-block;
  text-align: center;
  min-width: 140px;
  margin-top: 3rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  cursor: pointer;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 6px;

    @media (max-width: 980px) {
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      padding: 6px 12px;
      min-width: 100px;
    }

    @media (max-width: 780px) {
      padding: 6px 12px;
      min-width: 100px;
      margin-top: 1.5rem;
      margin-right: 12px;
    }

`;


const Button = ({ handleOnClick, value  }) =>  {

    return (
      <Btn onClick={ handleOnClick }>
        { value }
      </Btn>
    )
}

export default Button;
