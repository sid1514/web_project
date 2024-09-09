import "./App.css";

import { GoogleOAuthProvider } from "@react-oauth/google";
import NavBar from "./components/Dashboard/NavBar";
import Routing from "./Routing";
import Footer from "./components/FooterContact/Footer";
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
