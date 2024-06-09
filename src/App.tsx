import { Route, Routes, useLocation } from 'react-router-dom'
import './App.scss'
import Home from './pages/Home'
import Nav from './components/Nav'
import Footer from './components/Footer'
import All_products from './pages/All_products'
import Not_found from './pages/not_found'
import About_us from './pages/About_us'
import Shipping_Payment from './pages/Shipping_Payment'
import Return from './pages/Return'
import Garant from './pages/Garant'
import Blog from './pages/Blog'
import Contact from './pages/contact'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Id from './pages/id'
import Login from './pages/Login'
import Catalogs from './pages/catalog'
import Admin from './pages/admin'
import Create_product from './pages/admin/create_product'
import Create_category from './pages/admin/create_category'
import Manage_product from './pages/admin/manage_product'
import Manage_category from './pages/admin/manage_category'

function App() {
  const { pathname } = useLocation()
  return (
    <>
      {
        !pathname.includes("/admin") && !pathname.includes("/login") && <Nav/>
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
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/id' element={<Id/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/catalog' element={<Catalogs/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/admin/create_product' element={<Create_product/>}/>
        <Route path='/admin/create_category' element={<Create_category/>}/>
        <Route path='/admin/manage_product' element={<Manage_product/>}/>
        <Route path='/admin/manage_category' element={<Manage_category/>}/>
      </Routes>
      {
       !pathname.includes("/admin") && !pathname.includes("/login") && <Footer/>
      }
    </>
  )
}

export default App
