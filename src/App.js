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
import Profile from './Accounts/profile';
import AddProduct from './Accounts/addProductFrom'
import AboutUser from './Accounts/aboutUser';
import BecomeVendor from './Accounts/becomeVendor';
import ResetPassword from './Accounts/resetPassword';
import Footer from './components/Footer';
import Momo from './pages/momo';
import Paypal from './pages/paypal';
import Fabric from './pages/fabric';
import Users from './Accounts/users';
import Products from './Accounts/products';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route path='/' element={<Footer />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shopDetails' element={<ShopDetails />} />
        <Route path='shoppingCart' element={<ShoppingCart />} />
        <Route path='checkOut' element={<CheckOut />} />
        <Route path='contact' element={<Contact />} />
        <Route path='painting' element={<Painting />} />
        <Route path='sculpture' element={<Sculpture />} />
        <Route path='fabric' element={<Fabric />} />
        <Route path='momo' element={<Momo />} />
        <Route path='paypal' element={<Paypal />} />
        <Route path='profile' element={<Profile />}>
          <Route path='addProduct' element={<AddProduct />} />
          <Route index element={<AboutUser />} />
          <Route path='becomeVendor' element={<BecomeVendor />} />
          <Route path='resetPassword' element={<ResetPassword />} />
          <Route path='users' element={<Users />} />
          <Route path='products' element={<Products />} />

        </Route>

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
    setTimeout(() => {
      setLoading(false)
    })
  }, 5000)

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
