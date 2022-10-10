// 응답 카드 컴포넌트(객관식)

const ChoiceStat = function ({ statCard }) {
    return (
        <div className="survey-result-stat py-2 my-3">
            <p>Q1: {statCard.title}</p>
            <div className="survey-result-chans">
                {
                    statCard.answers.map((answer, ansIdx) => {
                        return <div key={ansIdx}>{answer.answer} - {answer.cnt} < br /></div>
                    })
                }
            </div>
            <div>차트 보여줄곳</div>
        </div>
    )
}

export default ChoiceStat;