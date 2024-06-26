import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import PrivateRoutes from './components/PrivateRoutes'
import CreateListing from './pages/CreateListing'
import UpdateLising from './pages/UpdateLising'
import Listing from './pages/Listing'
import Search from './pages/Search'
import Footer from './components/Footer'


function App() { 
  
  return <BrowserRouter>
  <Header/>
  <Routes>

  <Route path="/" element = {<Home/>}/>
  <Route path="/sign-in" element = {<SignIn/>}/>
  <Route path="/sign-up" element = {<SignUp/>}/>
  <Route path="/about" element = {<About/>}/>
  <Route path="/listing/:listingId" element = {<Listing/>}/>
  <Route path="/search" element = {<Search/>}/>
  <Route element = {<PrivateRoutes/>}>
    <Route path="/profile" element = {<Profile/>}/>
    <Route path="/create-listing" element = {<CreateListing/>}/>
    <Route path="/update-listing/:listingId" element = {<UpdateLising/>} />
  </Route>

  </Routes>
  <Footer />
  
  </BrowserRouter>
}

export default App
