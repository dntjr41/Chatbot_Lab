import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pager from "../components/Questionnaires/pager";

import Header from "../components/Header";
import "../css/QuestionnairePage.css"

function QuestionnairesPage() {
    return (
      <main >
        <Header color="purple" />
        <div id="questionnaire-page">
          <br/>
          <h1 className="Title"><b>&nbsp;&nbsp;&nbsp;&nbsp;설문 제작함</b></h1>
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