
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
