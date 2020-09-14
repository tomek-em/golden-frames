import React from 'react';
import styled from 'styled-components';


const Form = styled.form`
  margin-top: 2rem;
  margin-bottom: 3rem;

  .text-input,
  .date-input {
    width: 100%;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    background: #FFF;
    margin: 0 0 5px;
    padding: 10px;
    background: rgba(0,0,0,0);
  }

  .text-input:hover
  .date-input:hover {
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }

  @media (max-width: 760px) {
    .form {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`

const CustomForm = props => {
  return (
      <Form className="form">
        <div className="form-control">
          <label>Date
            <input type="date" className="date-input" value={ props.curDate } onChange={ props.handleDateChange } />
          </label>
        </div>
      </Form>
  )
}

export default CustomForm
