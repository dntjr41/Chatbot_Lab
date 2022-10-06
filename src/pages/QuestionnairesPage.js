import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pager from "../components/Questionnaires/pager";

function QuestionnairesPage() {
    return (
      <main >
        <div id="questionnaire-page">
          <br/>
          <br/>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;설문 제작함</h2>
          <br/>
          <br/>
          
          <QuestionnaireCardContainer />
          <br/>
          <Pager />
          <NewQuestionnaireButton />
        </div>
      </main>
    );
  }

export default QuestionnairesPage;