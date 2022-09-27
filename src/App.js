import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyInfoPage from './pages/MyInfoPage';

import TosPage from './pages/TosPage';
import ServicePage from './pages/ServicePage';
import PrivacyPage from './pages/PrivacyPage';
import FaqPage from './pages/FaqPage';

import QuestionnairesPage from './pages/QuestionnairesPage';
import SetSurveyPerTarPage from './pages/SetSurveyPerTarPage';
import DeploySurveyPage from './pages/DeploySurveyPage';
import CreateSurveyPage from './pages/CreateSurveyPage';

import FinishResponsePage from './pages/FinishResponsePage';
import SurveyResult from './pages/SurveyResultPage';
import NoPage from './pages/NoPage';

// 페이지별 url
// create-survey: 새 설문 작성 페이지
// *: 나머지 페이지(404 띄움)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          { <Route path="home" index element={<HomePage />} />}
          
          <Route path="login" element={<LoginPage />} />
          <Route path="myinfo" element={<MyInfoPage />} />

          <Route path="tos" element={<TosPage />} />
          <Route path="service-center" element={<ServicePage />} />
          <Route path="privacy-policy" element={<PrivacyPage />} />
          <Route path="faq" element={<FaqPage />} />

          <Route path="create-survey" element={<CreateSurveyPage />} />
          <Route path="questionnaires" element={<QuestionnairesPage />} />
          <Route path="deploy-survey" element={<DeploySurveyPage />} />
          <Route path="set-survey-per-tar" element={<SetSurveyPerTarPage />} />

          <Route path="finish-response" element={<FinishResponsePage />} />
          <Route path="survey-result">
            <Route path="statistic" element={<SurveyResult />} />
            <Route path="analysis" element={<NoPage />} />
          </Route>

          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;