import React from 'react';

export default React.createContext({
  city: null,
  long: null,
  lat: null,
  setLocation: () => {}
});
