import React, { useEffect } from 'react';
// components
import Header from "../components/Header";
import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pager from "../components/Questionnaires/pager";
// css
import "../css/QuestionnairePage.css"
// axios
import axiosInstance from '../api';
// redux
import { SET_SL, SET_SSL } from '../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

function QuestionnairesPage() {
  /* redux */
  /* 설문 정보 from server */
  const dispatch = useDispatch();
  const { surveyList } = useSelector((state) => ({
    surveyList: state.questionnairesReducer.surveyList
  }));

  const userId = localStorage.getItem("id");
  // API get surveyList by user ID
  const urlInstance = "/survey-info/user/" + userId;
  const getSurveyListById = async () => {
    try {
      await axiosInstance.get(urlInstance,
      )
        .then(function (response) {
          dispatch(SET_SL(response.data))
          dispatch(SET_SSL(surveyList))
        })
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getSurveyListById()
  }, []);

  /* main */
  return (
    <main >
      <Header color="purple" />
      <div id="questionnaire-page">
        <br />
        <h1 className="Title align-center"><b>설문 제작함</b></h1>
        <br />
        <QuestionnaireCardContainer />
        <br />
        <Pager />
        <NewQuestionnaireButton />
      </div>
    </main>
  );
}

export default QuestionnairesPage;