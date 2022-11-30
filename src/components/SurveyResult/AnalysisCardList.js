import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { useState } from "react";

import ChoiceAnaly from "./AnalysisCards/ChoiceAnaly";
import SubjectiveAnaly from "./AnalysisCards/SubjectiveAnaly";
import AnalyList from "./AnalysisCards/AnalyList";

import '../../css/SurveyResultPage.css';
import axios from "axios";
import axiosInstance from "../../api";
import { Navigate } from "react-router";

/*
여기서 받아오는걸 어디서 받아오는지 모르겠는데
받아온 데이터를 분석보기를 클릭했을 때 서버(플라스크)로 넘겨줘야할 것 같음
플라스크와 주고 받고 특정 버튼을 클릭했을 때 결과를 받아보기

처음에 분석보기를 들어갔을 때 데이터를 선택 ->
플라스크에서 선택한 데이터를 바탕으로 분석 진행 ->
받은 결과를 보여주는 형식
*/
axios.defaults.withCredentials = true;
var temp_cho = [], temp_sub = [];
var check = 0;

const AnalysisCardList = function () {
    const statCardList = useSelector(state => state.surveyResult.surveyStatistic);
    const [analy, setState] = useState([
        {
            questionId: [],
            keyword: [],
            weight: [],
            sentiment: [],
            positive: [],
            negative: [],
            neutral: [],
            title: []
        }
    ]);

    const showAnaly = () => {
        console.log(statCardList);
        alert("플라스크로 데이터 전송");

        axios.post('http://127.0.0.1:8087/react_to_flask', statCardList).
        then(function (response) {
            setState(response.data);
            console.log(response);
        }).
        catch(function (error) {
            console.log(error);
        });

        check = 1;
    }

    const downloadAnaly = () => {
        alert("결과 다운로드 받기");
        console.log(analy);
    }

    return (
        <>
            <div className="survey-result-statlist-layout">
                {
                    statCardList.map((statCard, listIdx) => {
                        if (statCard.type === 1) {
                            temp_cho.push(statCard.questionId);
                            
                            // if (temp_cho.includes(statCard.questionId) === true)
                            return <ChoiceAnaly statCard={statCard} key={listIdx} />
                        }
                        else {
                            temp_sub.push(statCard.questionId);

                            // if (temp_sub.includes(statCard.questionId) === true)
                            return <SubjectiveAnaly statCard={statCard} key={listIdx} />
                        }
                    })
                }

            </div>
            <div className="text-center my-5">
                <button className="survey-result-download fs-2" type="button" onClick={showAnaly}>결과 보기</button>
            </div>

            <div className="survey-result-statlist-layout">
                {
                    analy.map((values, index) => {
                        if (check === 1) 
                            return <AnalyList values={values} key={index}/>
                    })
                }
            </div>

            <div className="text-center my-5">
                <button className="survey-result-download fs-2" type="button" onClick={downloadAnaly}>다운로드</button>
            </div>

        </>
    )
}

export default AnalysisCardList;