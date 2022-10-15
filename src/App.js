import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from'./pages/Aboutpage';
import ShopPageDirectory from './pages/ShopPageDirectory';
import CartPage from './pages/Cartpage';
import ContactPage from './pages/Contactpage';
import Header from './components/Header';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
        <Routes>
          <Route path='/' exact element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='shop' element={<ShopPageDirectory />}/>
          <Route path='cart' exact element={<CartPage />}/>
          <Route path='contact' element={<ContactPage />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
