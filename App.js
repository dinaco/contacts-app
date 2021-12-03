import React from 'react';
import GlobalProvider from './src/assets/context/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  );
};

export default App;
