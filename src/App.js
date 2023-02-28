import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SignUp from './components/Accounts/SignUp';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} >
      </Route> 
      <Route path='signUp' element={<SignUp />} />
    </Route>
  )
)

function App() {

  
  return (
      <main>
        <RouterProvider router={router} />
      </main>
  );
}

export default App;
