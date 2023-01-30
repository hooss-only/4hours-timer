import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './pages/main';
import Timer from './pages/timer';

function App() {
  return (
    <div className="App">

      <header className='App-header'>
        <ChakraProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/timer/" element={<Timer />} />
            </Routes>
          </BrowserRouter>
        </ChakraProvider>
      </header>

    </div>
  );
}

export default App;
