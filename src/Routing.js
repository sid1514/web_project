import { Route, Routes } from "react-router-dom";
import Home from "./components/Dashboard/Home";
import Login from "./components/Auth/Login";
import UserAc from "./components/UserComp/UserAc";
import Aboutus from "./components/AboutComp/Aboutus";
import BookCar from "./components/BookcarComp/BookCar";
import Contact from "./components/FooterContact/Contact";
import CollectionCar from "./components/carLists/CarsSlider/adminCollection/CollectionCar";

const Routing = () => {
  return (
    <>
      {
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/UserAc" element={<UserAc />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/BookCar" element={<BookCar />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CollectionCar" element={<CollectionCar />} />
        </Routes>
      }
    </>
  );
};
export default Routing;
