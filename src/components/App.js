import React from 'react';

import BVLoader from './BVLoader';
import CommonLoader from './CommonLoader';
import PulseLoader from './PulseLoader';
import SatelliteLoader from './SatelliteLoader';
import BarGraphLoader from './BarGraphLoader';

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