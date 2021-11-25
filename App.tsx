import React from 'react';
import { StatusBar } from 'react-native';

import { Home } from './src/pages/Home';

const App = () => {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        translucent 
        backgroundColor="transparent" 
      />
      <Home />
    </>
  );
}

export default App