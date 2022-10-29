import Card from 'react-bootstrap/Card';
import testimg from '../../../../src/images/Logo square.png'
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';

function QuestionnaireTemplateCard(props) {
  const navigate = useNavigate();
  const [templateSelect, setTemplateSelect] = useState(false);
  /*
  useEffect(() => {
      {navigate("/create-survey/" + templateSelect);}
  },[templateSelect])*/
  return (
    <Card
      bg='light'
      key={props.id}
      text='dark'
      style={{ width: '12rem' }}
      className="mb-2">
      <Card.Img variant="top" src={testimg} alt="Card image" />
      <Card.Body className="text-center d-grid gap-2">
        <Card.Title><b>{props.title}</b></Card.Title>
        {props.surveyDescription ?
          props.surveyDescription.length > 20 ?
          <Card.Text className='TemplateUnknown'>{props.surveyDescription.substring(0, 20)}...</Card.Text>
          :<Card.Text className='TemplateUnknown'>{props.surveyDescription}</Card.Text>
          : <Card.Text className='TemplateUnknown'>작성된 설문 설명이 없습니다.</Card.Text>
        }
      </Card.Body>
      <Card.Footer className="text-center d-grid gap-2">
        <Button variant="dark" size="sg" onClick={setTemplateSelect(props.id)}>선택</Button>
      </Card.Footer>
    </Card>
  )
}

export default QuestionnaireTemplateCard