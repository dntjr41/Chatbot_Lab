import './App.css';
import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import SetSurveyPerTarPage from './pages/SetSurveyPerTarPage';
import DeploySurveyPage from './pages/DeploySurveyPage';
import NoPage from './pages/NoPage';

// 페이지별 url
// create-survey: 새 설문 작성 페이지
// *: 나머지 페이지(404 띄움)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<NoPage />} />
          <Route path="deploy-survey" element={<DeploySurveyPage />} />
          <Route path="set-survey-per-tar" element={<SetSurveyPerTarPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;