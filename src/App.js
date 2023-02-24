import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';



function App() {

  
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} /> 
        </Routes>
      </main>
    </BrowserRouter>

  );
}

export default App;
