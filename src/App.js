import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Homepage';
import AboutPage from'./pages/Aboutpage';
import ShopPage from './pages/Shoppage';
import ContactPage from './pages/Contactpage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='about' element={<AboutPage />}/>
        <Route path='podcast' element={<ShopPage />}/>
        <Route path='contact' element={<ContactPage />}/>
      </Routes>
    </div>
  );
}

export default App;
