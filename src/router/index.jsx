import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from '../pages/about/About';
import Blog from '../pages/blog/Blog';
import Contact from '../pages/contact/Contact';
import Detail from '../pages/detail/Detail';
import Garant from '../pages/garant/Garant';
import Home from '../pages/home/Home';
import Layout from '../pages/layout/Layout';
import Notfound from '../pages/not-found/Notfound';
import Return from '../pages/return/Return';
import Shipping from '../pages/shipping/Shipping';

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/return" element={<Return />} />
          <Route path="/garant" element={<Garant />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/products/:id' element={<Detail/>}/>
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default React.memo(Router)