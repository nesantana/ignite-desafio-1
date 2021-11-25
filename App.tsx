import React from 'react';
import { StatusBar } from 'react-native';

import Home from './src/pages/Home';

 const App: React.FC<any> = () => {
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