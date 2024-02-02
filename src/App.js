<<<<<<< HEAD
=======
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';
>>>>>>> d9a5711b5bc66ff8740e0970818a6cbf4939aac1

import './App.css';

import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Routing from './Routing';
import { useSelector } from "react-redux";

function App() {
 
  const auth = useSelector((state) => state.auth);
  return (
    <div className="App" >
      
      <NavBar/>
  <Routing/>

    <Footer/>
    </div>
  );
}

export default App;
