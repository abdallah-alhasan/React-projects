import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Landing/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
