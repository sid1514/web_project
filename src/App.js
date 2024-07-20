
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Routing from './Routing';
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
 
  
  return (
    <div className="App" >
      <GoogleOAuthProvider clientId="412495318560-oio09u8g8gs1rg2r5a0nesk1bd88gblh.apps.googleusercontent.com">
     
      <NavBar/>
      <Routing/>
      <Footer/>
    </GoogleOAuthProvider> 
    </div>
  );
}

export default App;
