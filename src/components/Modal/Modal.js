import React from 'react';
import MapContainer from './MapContainer';
import CustomForm from './CustomForm';
import Button from '../Buttons/Button';
import styled from 'styled-components';


const ModalContainer = styled.div`
  position: fixed;
  z-index: 10;
  width: 80%;
  top: 10vh;
  left: 10%;
  height: 80vh;
  background-color: #557E96;
  padding: 1rem 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;

    .form-container {
      width: 40%;
      margin-top: 1rem;
      height: 100%;

      p {
        margin-top: 2rem;
        font-size: 20px;
        font-weight: 300;
      }
    }

    .buttons {
      position: absolute;
      bottom: calc(5% + 12px);
      left: 16px;
    }


    @media (max-width: 760px) {
      flex-direction: column;
      justify-content: flex-start;
      width: 94%;
      left: 3%;
      height: 88%;

      .form-container {
        width: 90%;
        max-height: 44%;

        p {
          margin-top: 10px;
        }
      }
      .buttons {
        bottom: 8px;
        left: 2rem;
      }
`


class Modal extends React.Component {

  render () {
    const { location, zoom, curDate, handleDateChange, confirmCustom, toggleModal, onMapClick } = this.props;
    const position = [location.lat , location.lon];

    return(
      <ModalContainer>

        <div className="form-container">
          <h2>Custom time and date: </h2>
          <p>Your current location: <span className="w-600">{ location.city }</span></p>
          <CustomForm curDate={ curDate } handleDateChange={ handleDateChange } />
        </div>

        <MapContainer position={ position } zoom={ zoom } onMapClick={ onMapClick } />

        <div className="buttons">
          <Button handleOnClick={ confirmCustom } value={ 'OK' } />
          <Button handleOnClick={ toggleModal } value={ 'Cancel' } />
        </div>

      </ModalContainer>
    )
  }
}

export default Modal;
