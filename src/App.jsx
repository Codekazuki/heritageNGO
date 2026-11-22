import { Routes, Route } from "react-router-dom";
import { Header, Footer } from "./components/Layout";
import Animation from "./components/Animation";
import Home from "./pages/Home";
import About from "./pages/About";
import OurWork from "./pages/OurWork";
import Projects from "./pages/Projects";
import GetInvolved from "./pages/GetInvolved";
import React, { useEffect } from "react";

function ScrollTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
function NotFound() {
  return (
    <main className='not-found container'>
      <span className='eyebrow'>404 · PAGE NOT FOUND</span>
      <h1>
        Let's find
        <br />
        <em>our way back.</em>
      </h1>
      <a className='button button-green' href='/'>
        Back to home
      </a>
    </main>
  );
}
export default function App() {
  return (
    <>
      <ScrollTop />
      <Animation />
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/our-work' element={<OurWork />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/get-involved' element={<GetInvolved />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
