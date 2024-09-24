import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Root } from "postcss";
import Sidenav from "./components/Sidenav"
import Carnes from "./pages/Carnes"


export default function App(){
  return(
    <>
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Sidenav/>}/>
          <Route path="/Home" element={<TuRacha/>}/>
          <Route path="/projects" element = {<Carnes />}/>
          <Route path="/Workers" element ={<Lacteos/>}/>
          <Route path="/Chatgpt" element={<Granos/>}/>
        <Route/>
      </Routes>
     </BrowserRouter>
    </>
  )
}