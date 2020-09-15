import React from 'react';
import Button from '../Buttons/Button';
import styled from 'styled-components';


const HoursInfo = styled.div`
  padding-right: 6px;
  margin-bottom: 2.4rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 34px;
    margin-top: 1.2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.5rem;
  }

  .small {
    margin-top: 12px;
    font-weight: 300;
    font-size: 1rem;
  }

  @media (max-width: 1050px) {
    h2 {
      font-size: 26px;
      margin-bottom: 24px;
    }

    p {
      font-size: 18px;
    }

    .small {
      font-size: 12px;
    }
  }

  @media (max-width: 760px) {
    h2 {
      font-size: 22px;
      margin-bottom: 22px;
    }

    p {
      font-size: 18px;
    }
  }
`


class Hours extends React.Component {

  render () {
    return (
      <HoursInfo>
        <h2>{ this.props.location.city } { this.props.curDate }</h2>
        <p className="w-300">Blue hour: { this.props.hours.first_blue } - { this.props.hours.sunrise }</p>
        <p className="w-600">Sunrise: { this.props.hours.sunrise }</p>
        <p className="w-300">Golden hour: { this.props.hours.sunrise } - { this.props.hours.first_gold }</p>
        <br />
        <p className="w-300">Golden hour: { this.props.hours.second_gold } - { this.props.hours.sunset }</p>
        <p className="w-600">Sunset: { this.props.hours.sunset }</p>
        <p className="w-300">Blue hour: { this.props.hours.sunset } -  { this.props.hours.second_blue }</p>

        <p className="small" > *Please note that all times are <span className="w-600">in your time zone (UTC { this.props.location.timezone })</span>.
          If you selected area out from your current time zone you need to calculate time difference to get hours in regional time. </p>
        <div>
          <Button handleOnClick={ this.props.backToStart } value={ 'Back' } />
        </div>

      </HoursInfo>
    )
  }
}

export default Hours;
