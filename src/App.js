import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import MainCarousel from './components/MainCarousel';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <MainCarousel />
    </div>
  );
}

export default App;
