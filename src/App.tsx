import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import './App.css'
function App() {
  return (

    <BrowserRouter>
        <div className='App'>
          <AppRouter/>
        </div>
    </BrowserRouter>
  );
}

export default App;
