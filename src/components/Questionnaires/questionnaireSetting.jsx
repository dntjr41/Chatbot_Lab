import React from 'react';
import { useNavigate } from "react-router-dom";
// bootstrap
import ListGroup from 'react-bootstrap/ListGroup';
// redux
import { SET_SL, SET_SSL } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
// axios
import axiosInstance from '../../api';

function QuestionnaireSetting(props) {
    /* redux */
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { surveyList } = useSelector((state) => ({
        surveyList: state.questionnairesReducer.surveyList
    }));
    const { selectedQuestionnaireID } = useSelector((state) => ({
        selectedQuestionnaireID: state.questionnairesReducer.selectedQuestionnaireID
    }));
    /* 설문 list 변경 시 새로고침을 위한 부분 */
    const userId = localStorage.getItem("id");
    const urlInstance = "/survey-info/user/" + userId;
    const getSurveyListById = async () => {
        try {
            await axiosInstance.get(urlInstance)
                .then(function (response) {
                    dispatch(SET_SL(response.data))
                    dispatch(SET_SSL(surveyList))
                })
        } catch (err) {
            console.log(err);
        }
    }

    /* 설문 응답 미리보기 페이지로 이동 */
    function preview() {
        navigate("/response/" + selectedQuestionnaireID, { state: { isPreview: true } });
    }
    /* 설문 복사 */
    const surveyCopyUrlInstance = "/survey/" + selectedQuestionnaireID +"/duplicate";
    const surveyCopy = async () => {
        try {
            await axiosInstance.put(surveyCopyUrlInstance)
                .then(function (response) {
                    // handle success
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    /* 설문 수정 페이지로 이동*/
    function surveyAlter() {
        navigate("/create-survey", { state: { surveyId: selectedQuestionnaireID } });
    }
    /* 설문 삭제 */
    const surveyDeleteUrlInstance = "/survey/" + selectedQuestionnaireID;
    const surveyDelete = async () => {
        try {
            await axiosInstance.delete(surveyDeleteUrlInstance)
                .then(function (response) {
                    // handle success
                    console.log(response);
                    getSurveyListById();
                })
        } catch (err) {
            console.log(err);
        }
    }
    /* 설문 결과 페이지로 이동 */
    function surveyResultAnalysis() {
        navigate("/survey-result/statistic/" + selectedQuestionnaireID);
    }

    /* main */
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