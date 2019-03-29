import React from 'react';
import BVLoader from './BVLoader/BVLoader';
import CommonLoader from './CommonLoader/CommonLoader';
import PulseLoader from './PulseLoader/PulseLoader';
import SatelliteLoader from './SatelliteLoader/SatelliteLoader';
import BarGraphLoader from './BarGraphLoader/BarGraphLoader';

const App = () => (
  <div>
    <BarGraphLoader />
    <BVLoader />
    <CommonLoader />
    <PulseLoader />
    <SatelliteLoader />
  </div>
);

export default App;