import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Auth from "./components/Login/KakaoAuth";
import MyInfoPage from './pages/MyInfoPage';

import TosPage from './pages/TosPage';
import ServicePage from './pages/ServicePage';
import PrivacyPage from './pages/PrivacyPage';
import FaqPage from './pages/FaqPage';

import QuestionnairesPage from './pages/QuestionnairesPage';
import SetSurveyPerTarPage from './pages/SetSurveyPerTarPage';
import DeploySurveyPage from './pages/DeploySurveyPage';
import CreateSurveyPage from './pages/CreateSurveyPage';

import ResponseSurveyPage from './pages/ResponseSurveyPage';
import FinishResponsePage from './pages/FinishResponsePage';
import SurveyResult from './pages/SurveyResultPage';
import NoPage from './pages/NoPage';
import ScrollTop from './components/ScrollTop';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

// 페이지별 url
// create-survey: 새 설문 작성 페이지
// survey-result
//  └/statistic: 설문 결과 통계
//  └/analysis: 설문 결과 분석
// *: 나머지 페이지(404 띄움)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollTop />
        <Routes>
          <Route path="/">
            {<Route path="home" index element={<HomePage />} />}

            <Route path="login" element={<LoginPage />} />
            <Route path="auth/kakao/callback" element={<Auth/>}/>
            <Route path="myinfo" element={<MyInfoPage />} />

            <Route path="tos" element={<TosPage />} />
            <Route path="service-center" element={<ServicePage />} />
            <Route path="privacy-policy" element={<PrivacyPage />} />
            <Route path="faq" element={<FaqPage />} />

            <Route path="create-survey" element={<CreateSurveyPage />} />
            <Route path="questionnaires" element={<QuestionnairesPage />} />
            <Route path="deploy-survey" element={<DeploySurveyPage />} />
            <Route path="set-survey-per-tar" element={<SetSurveyPerTarPage />} />

            <Route path="response" element={<ResponseSurveyPage />} />
            <Route path="finish-response" element={<FinishResponsePage />} />
            <Route path="survey-result">
              <Route path="statistic" element={<SurveyResult />} />
              <Route path="analysis" element={<NoPage />} />
            </Route>

            <Route path="*" element={<NoPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;