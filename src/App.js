import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Routing from "./Routing";
import { useSelector } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_CLIENT_ID}>
        <NavBar />
        <div>
          <Routing />
        </div>
        <div>
          <Footer />
        </div>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
