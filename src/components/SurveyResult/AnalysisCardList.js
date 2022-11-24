import { useSelector } from "react-redux";

import ChoiceAnaly from "./AnalysisCards/ChoiceAnaly";
import SubjectiveAnaly from "./AnalysisCards/SubjectiveAnaly";

import '../../css/SurveyResultPage.css';
import axios from "axios";
import axiosInstance from "../../api";

/*
여기서 받아오는걸 어디서 받아오는지 모르겠는데
받아온 데이터를 분석보기를 클릭했을 때 서버(플라스크)로 넘겨줘야할 것 같음
플라스크와 주고 받고 특정 버튼을 클릭했을 때 결과를 받아보기

처음에 분석보기를 들어갔을 때 데이터를 선택 ->
플라스크에서 선택한 데이터를 바탕으로 분석 진행 ->
받은 결과를 보여주는 형식
*/
axios.defaults.withCredentials = true;

const AnalysisCardList = function () {
    const statCardList = useSelector(state => state.surveyResult.surveyStatistic);

    const showAnaly = () => {
        console.log(statCardList);
        alert("플라스크로 데이터 전송");

        axios.post('http://127.0.0.1:8087/react_to_flask', statCardList).
        then(function (response) {
            console.log(response);
        }).
        catch(function (error) {
            console.log(error);
        });
    }

    const downloadAnaly = () => {
        alert("결과 다운로드 받기");
    }

    return (
        <>
            <div className="survey-result-statlist-layout">
                {
                    statCardList.map((statCard, listIdx) => {
                        if (statCard.type === 1) {
                            return <ChoiceAnaly statCard={statCard} key={listIdx} />
                        }
                        else {
                            return <SubjectiveAnaly statCard={statCard} key={listIdx} />
                        }
                    })
                }

            </div>
            <div className="text-center my-5">
                <button className="survey-result-download fs-2" type="button" onClick={showAnaly}>결과 보기</button>
            </div>

            <div>
                <h1>해당 부분에서 결과를 받아서 보여주기</h1>
            </div>

            <div className="text-center my-5">
                <button className="survey-result-download fs-2" type="button" onClick={downloadAnaly}>다운로드</button>
            </div>

        </>
    )
}

export default AnalysisCardList;