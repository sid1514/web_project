import { Route,Routes} from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Login from './components/Login';
import UserAc from './components/UserAc';
import BookCar from './components/BookCar';
import Contact from './components/Contact';
import CollectionCar from './components/CollectionCar';
const Routing=()=>{
  
    return(
        <>
    {
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/Login" element={<Login/>} />
            <Route path="/UserAc" element={<UserAc/>}/>
            <Route path="/Aboutus" element={<Aboutus/>}/>
            <Route path="/BookCar" element={<BookCar/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/CollectionCar' element={<CollectionCar/>}/>
        </Routes>
     }
   
        </>
    )
}
export default Routing;