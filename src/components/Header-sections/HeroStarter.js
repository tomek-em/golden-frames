import React from 'react';
import Button from '../Buttons/Button';


const HeroStarter = props => {
  return (
    <div className="hero-text">
      <h1>Golden hour calculator</h1>
      <p>Get ready to your next sunset or sunrise photography shoot. Check time of golden hour and blue hour.</p>
      <Button handleOnClick={ props.getLocation } value={ 'Today' } />
      <Button handleOnClick={ props.toggleModal } value={ 'Custom' } />
    </div>
  )
}

export default HeroStarter
