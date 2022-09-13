import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/Layout/Layout"

import Login from "./routes/login";
import Mypage from "./routes/mypage";
import Questionnaires from "./routes/questionnaires";
import Formedit from './routes/formedit';
import Notice from './routes/notice';
import Manual from './routes/manual';
import Servicecenter from './routes/servicecenter';
import Faq from './routes/faq';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Layout>
  <BrowserRouter>
  <Routes>
 
    <Route path="/" element={<App />} />
    <Route path="login" element={<Login />} />
    <Route path="mypage" element={<Mypage />} />
    <Route path="questionnaires" element={<Questionnaires />} />
    <Route path="formedit" element={<Formedit />} />
    <Route path="manual" element={<Manual />} />
    <Route path="notice" element={<Notice />} />
    <Route path="servicecenter" element={<Servicecenter />} />
    <Route path="faq" element={<Faq />} />
   
  </Routes>
</BrowserRouter>,
</Layout>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
