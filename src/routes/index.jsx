import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import App from "../App";
import Pokedex from "../fetching/Pokedex";
import Home from "../Home";
import ImageOptimization from "../image-optimization";
import ContentLayoutShift from "../image-optimization/ContentLayoutShift";
import Rendering from '../rendering/WrapperComponent';

function Lessons() {
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
            <Route path="rendering" element={<Rendering />} />
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
