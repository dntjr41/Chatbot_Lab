import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pager from "../components/Questionnaires/pager";

import Header from "../components/Header";
import "../css/QuestionnairePage.css"

import axiosInstance from '../api';

import { SET_SL, SET_SSL } from '../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';

function QuestionnairesPage() {
  /* redux */
  const dispatch = useDispatch();
  const {surveyList} = useSelector((state) => ({
    surveyList: state.questionnairesReducer.surveyList
  }));
  const userId = localStorage.getItem("id");
  // API get surveyList by user ID
  const urlInstance = "/survey/userId=" + userId;
  const getSurveyListById = async () => {
    try {
      const res = await axiosInstance.get(urlInstance)
        .then(function (response) {
          dispatch(SET_SL(response.data))
          dispatch(SET_SSL(surveyList))
        })
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    { getSurveyListById() }
  }, []);
  
  return (
    <main >
      <Header color="purple" />
      <div id="questionnaire-page">
        <br />
        <h1 className="Title"><b>&nbsp;&nbsp;&nbsp;&nbsp;설문 제작함</b></h1>
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