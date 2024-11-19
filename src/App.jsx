
import {Route, BrowserRouter, Routes } from "react-router-dom";
import HeroSection from "./pages/homepage";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HeroSection/>}/>
      </Routes>
    </BrowserRouter>
    </RecoilRoot>

  )
}