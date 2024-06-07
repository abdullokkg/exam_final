import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from "./components/Header"
import All_products from './pages/All_products'
import Not_found from './pages/not_found'
import About_us from './pages/About_us'
import Shipping_Payment from './pages/Shipping_Payment'
import Return from './pages/Return'
import Garant from './pages/Garant'
import Blog from './pages/Blog'
import Contact from './pages/contact'

function App() {
  const { pathname } = useLocation()
  return (
    <>
      <Nav/>
      {
        !pathname.includes("/contact") && !pathname.includes("/blog") && !pathname.includes("/about_us") && !pathname.includes("/garant") && !pathname.includes("/return") && !pathname.includes("/all_products") && !pathname.includes("/shipping_payment") && <Header/>
      }
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/all_products' element={<All_products/>}/>
        <Route path='*' element={<Not_found/>}/>
        <Route path='/about_us' element={<About_us/>}/>
        <Route path='/return' element={<Return/>}/>
        <Route path='/shipping_payment' element={<Shipping_Payment/>}/>
        <Route path='/garant' element={<Garant/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
