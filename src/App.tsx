
import React from 'react';
import { BetProvider } from './contexts/bet';
import Home from './pages/home';

function App() {
  return (    
    <BetProvider>
      <Home />
    </BetProvider>
  );
}

export default App;