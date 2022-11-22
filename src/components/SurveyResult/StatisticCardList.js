import { useSelector } from "react-redux";

import ChoiceStat from "./StatisticCards/ChoiceStat";
import SubjectiveStat from "./StatisticCards/SubjectiveStat";

import '../../css/SurveyResultPage.css'

// └응답 카드 컴포넌트 리스트
//   └응답 카드 컴포넌트(유형별 다른 컴포넌트)

const StatisticCardList = function () {
    const statCardList = useSelector(state => state.surveyResult.surveyStatistic);

    const downloadStat = () => {
        console.log(statCardList);
        alert("다운로드 csv파일");
    }

    return (
        <>
            <div className="survey-result-statlist-layout">
                {
                    statCardList.map((statCard, listIdx) => {
                        if (statCard.type === 1) {
                            return <ChoiceStat statCard={statCard} key={listIdx} />
                        }
                        else {
                            return <SubjectiveStat statCard={statCard} key={listIdx} />
                        }
                    })
                }

            </div>
            <div className="text-center my-5">
                <button className="survey-result-download fs-2" type="button" onClick={downloadStat}>다운로드</button>
            </div>

        </>

    )
}

export default StatisticCardList;