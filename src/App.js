import React from "react";
import "./App.css";
import CanvaMod from "./Useless/CanvaMod";
import { Route, Routes } from "react-router-dom";
import HDphotoshop from "./Useless/HDphotoshop";
import Home from "./Home/Home";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogdetails from "./Pages/Blogdetails";
import Createpost from "./Pages/Createpost";
import DeInstaAcc from "./Useless/DeInstaAcc";
import DGoogleDoc from "./Useless/DGoogleDoc";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="Blogs" Component={Blogs} />
        <Route path="About" Component={About} />
        <Route path="Contact" Component={Contact} />
        <Route path="Createpost" Component={Createpost} />
        <Route path="Blogdetails" Component={Blogdetails} />
        <Route path="HDphotoshop" Component={HDphotoshop} />
        <Route path="CanvaMod" Component={CanvaMod} />
        <Route path="DeInstaAcc" Component={DeInstaAcc} />
        <Route path="DGoogleDoc" Component={DGoogleDoc} />
     
      </Routes>
    </div>
  );

}
export default App;
