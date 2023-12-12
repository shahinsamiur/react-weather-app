import { useEffect,useLayoutEffect, useState,Suspense} from 'react'
import  "./App.css"
import Image from "./assets/logo.png"
import Menu from './components/modal/modal.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./pages/weather"
function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Weather />}>
           <Route path="/bss" element={<Menu />}/>
        </Route>
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
