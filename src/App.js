import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Routing from './Routing';

function App() {
  return (
    <div className="App" style={{backgroundColor:'black',height:'max-content'}}>
    <NavBar/>
  
    <Routing/>
    <Footer/>
    </div>
  );
}

export default App;
