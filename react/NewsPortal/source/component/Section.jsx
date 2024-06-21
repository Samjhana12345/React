import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import News from './page/News';
import Business from './page/Business';
import Entertainment from './page/Entertainment';
import Others from './page/Others';
import Items_details from './page/Items_Details';
import Page_not_found from './page/page_not_found';

function Section() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/business" element={<Business />} />
      <Route path="/entertainment" element={<Entertainment />} />
      <Route path="/others" element={<Others />} />
      <Route path="/item_details/:item_id" element={<Items_details/>}/>
      <Route path="/*" element={<Page_not_found/>}/>  
    </Routes>
  );
}

export default Section;
