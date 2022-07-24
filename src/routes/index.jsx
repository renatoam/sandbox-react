import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import Pokedex from "../fetching/Pokedex";
import Home from "../Home";
import ContentLayoutShift from "../image-optimization/ContentLayoutShift";
import Parent from '../rendering/Parent'

function Lessons() {
  return (
    <Outlet />
  )
}

function ImageOptimization() {
  return (
    <Outlet />
  )
}

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="lessons" element={<Lessons />}>
            <Route path="rendering" element={<Parent />} />
            <Route path="fetching" element={<Pokedex />} />
            <Route path="optimization" element={<ImageOptimization />}>
              <Route path="cls" element={<ContentLayoutShift />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
