import { useSelector } from "react-redux";

import ChoiceStat from "./StatisticCards/ChoiceStat";
import SubjectiveStat from "./StatisticCards/SubjectiveStat";

import '../../css/SurveyResultPage.css'

// └응답 카드 컴포넌트 리스트
//   └응답 카드 컴포넌트(유형별 다른 컴포넌트)

const StatisticCardList = function () {
    const statCardList = useSelector(state => state.surveyStatistic.answerStatList);

    return (
        <div className="survey-result-statlist">
            {
                statCardList.map((statCard, listIdx) => {
                    if (statCard.type === "choice") {
                        return <ChoiceStat statCard={statCard} key={listIdx} />
                    }
                    else {
                        return <SubjectiveStat statCard={statCard} key={listIdx} />
                    }
                })
            }
            <button type="button">다운로드</button>
        </div>
    )
}

export default StatisticCardList;