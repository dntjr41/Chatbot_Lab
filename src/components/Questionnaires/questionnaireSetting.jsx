import ListGroup from 'react-bootstrap/ListGroup';

import { SET_SL, SET_SSL } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import axiosInstance from '../../api';

function QuestionnaireSetting(props) {
    const { selectedQuestionnaireID } = useSelector((state) => ({
        selectedQuestionnaireID: state.questionnairesReducer.selectedQuestionnaireID
    }));
    /* redux */
    // 새로고침을 위한 부분
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { surveyList } = useSelector((state) => ({
        surveyList: state.questionnairesReducer.surveyList
    }));
    const userId = localStorage.getItem("id");
    // API get surveyList by user ID
    const getSurveyUrlInstance = "/survey/userId=" + userId;
    const getSurveyListById = async () => {
        try {
            const res = await axiosInstance.get(getSurveyUrlInstance)
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

    /* onclick 함수들 */
    // to responseSurveyPage
    function preview() {
        navigate("/response/" + selectedQuestionnaireID, { state: { isPreview: true } });
    }
    //* API copy survey by survey ID *//
    const surveyCopyUrlInstance = "/survey/copy/surveyId=" + selectedQuestionnaireID;
    const surveyCopy = async () => {
        try {
            const res = await axiosInstance.put(surveyCopyUrlInstance)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    // to CreateSurveyPage
    function surveyAlter() {
        navigate("/create-survey/" + selectedQuestionnaireID);
    }
    // API delete survey by survey ID
    const surveyDeleteUrlInstance = "/survey/surveyId=" + selectedQuestionnaireID;
    const surveyDelete = async () => {
        try {
            const res = await axiosInstance.delete(surveyDeleteUrlInstance)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    function surveyResultAnalysis() {
        navigate("/survey-result/statistic/" + selectedQuestionnaireID);
    }
    return (
        <ListGroup>
            <ListGroup.Item action onClick={preview} >
                설문 보기
            </ListGroup.Item >
            <ListGroup.Item action onClick={surveyCopy} >
                설문 복사
            </ListGroup.Item>
            <ListGroup.Item action onClick={surveyAlter} >
                설문 수정
            </ListGroup.Item>
            <ListGroup.Item action onClick={surveyDelete} >
                설문 삭제
            </ListGroup.Item>
            {props.resultActive ?
                <ListGroup.Item action onClick={surveyResultAnalysis}>
                    결과 분석
                </ListGroup.Item> :
                null
            }

        </ListGroup>
    )
}

export default QuestionnaireSetting