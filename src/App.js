import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import SignUp from './Accounts/SignUp';
import SignIn from './Accounts/SignIn';
import Shop from './pages/Shop';
import ShopDetails from './pages/ShopDetails';
import ShoppingCart from './pages/ShoppingCart';
import CheckOut from './pages/CheckOut';
import Contact from './pages/Contact';
import HomeLayout from './components/HomeLayout';
import About from './components/About';
import Help from './components/Help';
import Faq from './components/Faq';
import ForgotPassword from './Accounts/ForgotPassword';
import Painting from './pages/Painting'
import Sculpture from './pages/Sculpture';
import { RingLoader } from 'react-spinners';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route path='/' element={<HomeLayout />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='shopDetails' element={<ShopDetails />}/>
        <Route path='shoppingCart' element={<ShoppingCart />}/>
        <Route path='checkOut' element={<CheckOut />}/>
        <Route path='contact' element={<Contact />}/>
        <Route path='painting' element={<Painting/> }/>
        <Route path='sculpture' element={<Sculpture/> }/>

      </Route>
      <Route path='signUp' element={<SignUp />} />
      <Route path='signIn' element={<SignIn />} />
      <Route path='forgotPassword' element={<ForgotPassword />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<Help />} />
      <Route path='faq' element={<Faq />} />

    </Route>
  )
)

function App() {
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState()
  useEffect(() => {
    setLoading(false)
    setTimeout(()=>{
      setLoading(false)
    })
  },5000)

  return (
    <main>
      {
        loading?
        <RingLoader
        color='gold'
        loading={loading}
        // cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      :
      <RouterProvider router={router} />

      }
    </main>
  );
}

export default App;
