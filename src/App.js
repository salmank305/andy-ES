
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cselp } from "./components/Cselp";

import { Login } from "./components/Login/Login";
import { Navbar } from "./components/NavBar/Navbar";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cselp' element={<Cselp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};
