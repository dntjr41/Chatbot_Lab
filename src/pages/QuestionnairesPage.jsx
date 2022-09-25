import QuestionnaireCardContainer from "../components/Questionnaires/questionnaireCardContainer";
import NewQuestionnaireButton from "../components/Questionnaires/newQuestionnaireButton";
import Pagination from 'react-bootstrap/Pagination';


export default function Questionnaires() {
  let active = 1;
  let myQuestionnaireCount = 100;
  let items = [];
  for (let number = 1; number <= myQuestionnaireCount / 6; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Questionnaires</h2>
        <QuestionnaireCardContainer />
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />

          {items}

          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
        <NewQuestionnaireButton />
      </main>
    );
  }