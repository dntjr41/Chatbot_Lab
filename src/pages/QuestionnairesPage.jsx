import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pagination from 'react-bootstrap/Pagination';

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
      <main >
        <div id="questionnaire-page">
          <br/>
          <br/>
          <h2>&nbsp;&nbsp;&nbsp;&nbsp;설문 제작함</h2>
          <br/>
          <br/>
          
          <QuestionnaireCardContainer />
          <br/>
          <Pagination className="d-flex justify-content-center" >
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