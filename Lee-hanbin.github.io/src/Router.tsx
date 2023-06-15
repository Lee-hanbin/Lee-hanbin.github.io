import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Intro from './Routes/Intro';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Intro />} />
    </Route>,
  ),
);

export default router;