import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from'./pages/Aboutpage';
import ShopPage from './pages/Shoppage';
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
          <Route path='/' element={<HomePage />}/>
          <Route path='about' element={<AboutPage />}/>
          <Route path='shop' element={<ShopPage />}/>
          <Route path='contact' element={<ContactPage />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
