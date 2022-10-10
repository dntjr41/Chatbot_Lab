// 응답 카드 컴포넌트(주관식)

const SubjectiveStat = function ({ statCard }) {
    return (
        <div className="survey-result-stat py-2 my-3">
            <p>Q1: {statCard.title}</p>
            <div className="survey-result-subans">
                {
                    statCard.answers.map((answer, ansIdx) => {
                        return <div key={ansIdx}>{answer} < br /></div>
                    })
                }
            </div>
        </div >
    )
}

export default SubjectiveStat;