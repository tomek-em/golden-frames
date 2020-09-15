import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Navbar from '../components/Nav/Navbar';
import HeroStarter from '../components/Header-sections/HeroStarter';
import Loading from '../components/Header-sections/Loading';
import Hours from '../components/Header-sections/Hours';
import Modal from '../components/Modal/Modal';

import headerImg from '../res/ann-savchenko-H0h_89iFsWs-unsplash.jpg';
import Wrapper from '../components/Header-sections/Wrapper-styles';


const Header = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: #FF827D;
  color: #fff;
`


class Home extends Component {

  constructor(props) {
    super(props);

    const date = new Date().toISOString().slice(0,10);

    this.state = {
      location: {
        lat: null,
        lon: null,
        city: null,
        timezone: null
      },
      hours: {
        first_blue: null,
        sunrise: null,
        first_gold: null,
        second_gold: null,
        sunset: null,
        second_blue: null
      },
      zoom: 7,
      error: null,
      gotLocation: false,
      isLoading: false,
      showModal: false,
      curDate: date
    };

    this.getLocation = this.getLocation.bind( this );
    this.fetchData = this.fetchData.bind( this );
    this.getDefaultData = this.getDefaultData.bind( this );
    this.getCustomData = this.getCustomData.bind( this );
    this.showCustomLocationWindow = this.showCustomLocationWindow.bind( this );
    this.toggleModal = this.toggleModal.bind( this );
    this.handleDateChange = this.handleDateChange.bind( this );
    this.onMapClick = this.onMapClick.bind( this );
    this.backToStart = this.backToStart.bind( this );
  }


  // Get data for default location and date
  async getDefaultData() {
    this.setState({ isLoading: true });
    // get location
    try {
      await this.getLocation();
    } catch ( err ) {
      this.setState({
        loading: false
       });
      alert( err );
      return null;
    }
    this.fetchData( true );
  }


  // Set custom location and date, then fetch data
  getCustomData() {
    this.setState({ isLoading: true });
    this.toggleModal();
    this.fetchData( false );
  }


  // Get location from API
  getLocation() {
    let endpoint = 'https://ipapi.co/json';

    return fetch(endpoint, {
        method: 'GET'
      })
      .then((res) => res.json())
      .then((locationJson) => {
        this.setState({
          location: {
            lat: locationJson.latitude,
            lon: locationJson.longitude,
            city: locationJson.city,
            timezone: locationJson.utc_offset
          }
        });
      })
      .catch(err => {
        console.log('Cannot fetch location ');
      });
  }



  // Fetch all data
  async fetchData( defaultData ) {

    let date;
    let location = this.state.location;
    defaultData ? date = new Date().toISOString().slice(0,10) : date = this.state.curDate;
    let endpoint = `https://api.sunrise-sunset.org/json?lat=${location.lat}0&lng=${location.lon}&date=${date}`;
    fetch(endpoint, {
      method: 'GET'
    })
      .then((res) => res.json())
      .then((json) => {

        let zone_h = parseFloat( location.timezone.substring(0, location.timezone.length - 2) );
        let zone_m = parseFloat( location.timezone.substring(location.timezone.length - 2, location.timezone.length) );
        if (zone_m == 30) zone_h += 0.5;

        this.setState({
          hours: {
            sunrise: ( moment.utc(`${json.results.sunrise}`, ["h:mm A"]).add(zone_h, 'hours').format('hh:mm')),
            sunset: ( moment.utc(`${json.results.sunset}`, ["h:mm A"]).add(zone_h, 'hours').format('HH:mm')),
            first_blue: ( moment.utc(`${json.results.nautical_twilight_begin}`, ["h:mm A"]).add(zone_h, 'hours').format('HH:mm')),
            second_blue: ( moment.utc(`${json.results.nautical_twilight_end}`, ["h:mm A"]).add(zone_h, 'hours').format('HH:mm')),
            first_gold: ( moment.utc(`${json.results.sunrise}`, ["h:mm A"]).add(zone_h, 'hours').add(1, 'hours').format('HH:mm')),
            second_gold: ( moment.utc(`${json.results.sunset}`, ["h:mm A"]).add(zone_h, 'hours').add(-1, 'hours').format('HH:mm'))
          },

          form: {
            location: location.city
          },
          gotLocation: true,
          isLoading: false,
          curDate: date
        });
      })
      .catch(err => {
        this.setState({
          error: err,
          isLoading: false
        });
      });
  }


  // show cutom location window
  async showCustomLocationWindow() {
    if(this.state.location.city == null) {
      this.setState({ isLoading: true });

      try {
        await this.getLocation();
      } catch ( err ) {
        this.setState({ loading: false });
        alert('Can not fetch location');
        return null;
      }
      this.setState({ isLoading: false });
    }
    this.toggleModal();
  }

  // Back to start function
  toggleModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }


  handleDateChange(e) {
    this.setState({
      curDate: e.target.value
    });
  }
  // -----


  // Handle on map click
  onMapClick(e) {
    this.setState({
      location: {
        ...this.state.location,
        lat: e.latlng.lat,
        lon: e.latlng.lng
      },
      zoom: e.target._zoom
    });

    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${e.latlng.lat}&lon=${e.latlng.lng}`)
      .then((res) => res.json())
      .then((json) => {
        let locationName
        if (json.address.municipality)  {
          locationName = json.address.municipality;
        } else if (json.address.city) {
          locationName = json.address.city;
        } else if (json.address.town) {
          locationName = json.address.town;
        } else {
          locationName = 'Selected area';
        }

          this.setState({
            location: {
              ...this.state.location,
              city: locationName
            }
          });
      })
      .catch(( err ) => {
        console.log( err );
      });
  }


  // Back to start function
  backToStart() {
    this.setState({
      gotLocation: false
    });
  }



  render () {

    let { location, zoom, hours, curDate, gotLocation, isLoading } = this.state;
    let heroSection;

    if (isLoading ) {
      heroSection = <Loading />;
    } else if (!isLoading && gotLocation ) {
      heroSection = <Hours location={ location } curDate={ curDate } hours={ hours } backToStart={ this.backToStart } />;
    } else {
      heroSection = <HeroStarter getLocation={ this.getDefaultData } toggleModal={ this.showCustomLocationWindow } />;
    }

    return (
      <Header>
        <Navbar />

        {this.state.showModal &&
          <Modal
            curDate={ curDate }
            location={ location }
            zoom={ zoom }
            onMapClick={ this.onMapClick }
            confirmCustom={ this.getCustomData }
            toggleModal={ this.toggleModal }
            handleDateChange={ this.handleDateChange }
           /> }

        <Wrapper>
          <div className="column left-column">
            { heroSection }
          </div>
          <div className="column right-column">
            <img src={ headerImg } alt="main pic"/>
          </div>
        </Wrapper>

      </Header>
    )
  }
}

export default Home
