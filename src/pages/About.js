import React from 'react';
import Navbar from '../components/Nav/Navbar';

import styled from 'styled-components';

const AboutSection = styled.div`
  position: relative;
  padding: 6px 0;
  width: 100%;
  min-height: 100vh;
  background-color: #FF827D;
  color: #fff;

  .container h2 {
    font-size: 30px;
    padding-top: 85px;
    margin-bottom: 20px;
  }

  .container p {
    font-size: 18px;
    margin-bottom: 12px;

    a {
      color: #eee;
      text-decoration: none;
    }
  }
`


const About = props => {
  return (
    <AboutSection>
      <Navbar />

      <div className="container">
        <h2>Golden frames</h2>
        <p>Golden frames is a golden hour calculator.</p>
        <p>In photography, the golden hour is the period of daytime shortly after sunrise or before sunset, during which daylight is redder and softer than when the Sun is higher in the sky.
        The period of time right before sunrise and shortly after sunset is called the "magic hour," especially by cinematographers. <i>- wikipedia.org</i></p>
        <br/>
        <p>Credits: Sunrise - sunset <a href="https://sunrise-sunset.org/api">API</a>.</p>
        <p>Picture: Ann Savchenko <a href="https://unsplash.com/@emulsio">Unsplash.com</a>.</p>
        <p>Created and designed by <a href="https://tomaszmejer.com">Tomasz Mejer</a>.</p>
      </div>

    </AboutSection>
  )
}

export default About
