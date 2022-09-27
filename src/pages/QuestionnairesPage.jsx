import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pagination from 'react-bootstrap/Pagination';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/QuestionnairePage.module.css'

export default function Questionnaires() {
  let active = 1;
  let myQuestionnaireCount = 30;
  let items = [];
  for (let number = 1; number <= myQuestionnaireCount / 6; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

    return (
      <main>
        <div id="questionnaire-page">
          <h2>설문 제작함</h2>
          <QuestionnaireCardContainer />

          <Pagination className="Center">
            <Pagination.First />
            <Pagination.Prev />

              {items}

            <Pagination.Next />
            <Pagination.Last />
          </Pagination>

          <NewQuestionnaireButton />
        </div>
      </main>
    );
  }