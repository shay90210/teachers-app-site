import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import Footer from '../src/components/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <MainCarousel />
      <Footer />
    </div>
  );
}

export default App;
