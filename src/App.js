import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Dashboard from './component/Dashboard/Dashboard';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Reviews from './component/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Header></Header>
 <Routes>
<Route path="/" element={<Home></Home>}> </Route>
<Route path="/Home" element={<Home></Home>}> </Route>
<Route path="/Reviews" element={<Reviews></Reviews>}></Route>
<Route path="/Blogs" element={<Blogs></Blogs>}></Route>
<Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
<Route path="/About" element={<About></About>}></Route>

   </Routes>      
    </div>
  );
}

export default App;
