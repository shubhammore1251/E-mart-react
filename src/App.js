import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import Account from './components/Account';
import ContactUs from './components/ContactUs';
import About from './components/About';


function App() {
  return (
    <>

      <Router>

        <Navbar />
        <Routes>
          <Route exact path='/' element={< Home heading="Latest Products"/>}/>

          <Route exact path='/about' element={<About/>}/>

          <Route exact path='/products' element={<Products heading="All Products"/>}/>

          <Route exact path='/products/:id' element={<Product/>}/>

          <Route exact path='/cart' element={<Cart/>}/>

          <Route exact path='/checkout' element={<Checkout/>}/>

          <Route exact path='/account' element={<Account/>}/>
          
          <Route exact path='/contact' element={<ContactUs/>}/>
        </Routes>
        
        <Footer/>
      </Router>

    </>
  );
}

export default App;
