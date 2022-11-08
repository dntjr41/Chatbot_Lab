import React from 'react';
import { useNavigate } from "react-router-dom";
// bootstrap
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// img
import testimg from '../../../../src/images/Logo square.png'
// redux
import { SET_QTPS_OFF } from '../../../modules/questionnairesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SET_TEMPLATE } from "../../../modules/createSurveySlice";
// axios
import axiosInstance from '../../../api';

function QuestionnaireTemplateCard(props) {
  const navigate = useNavigate();
  /* redux */
  const dispatch = useDispatch();
  const { templateSelectOption } = useSelector((state) => ({ // 0: 기본 제공 템플릿, 1: 이전 작성 설문 템플릿
    templateSelectOption: state.questionnairesReducer.templateSelectOption,
  }));
  // 설문지 리스트에서 설문지 ID를 받아서 페이지를 열었다면
  // 해당 설문지의 템플릿 정보를 서버로부터 가져와서 템플릿 초기화
  const getSurveyTemplate = async () => {
    try {
      //응답 성공 
      axiosInstance.get('/response/' + props.id)
        .then((response) => {
          dispatch(SET_TEMPLATE(response.data));
        })
    } catch (error) {
      //응답 실패
      console.error(error);
    }
  }
  const templateSelectOnClick = () => {
    dispatch(SET_QTPS_OFF())
    if (templateSelectOption === 0) {
      dispatch(SET_TEMPLATE(props.templateData))
      navigate("/create-survey")
    }
    else {
      getSurveyTemplate()
      navigate("/create-survey")
    }
  }

  /* main */
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
            : <Card.Text className='TemplateUnknown'>{props.surveyDescription}</Card.Text>
          : <Card.Text className='TemplateUnknown'>작성된 설문 설명이 없습니다.</Card.Text>
        }
      </Card.Body>
      <Card.Footer className="text-center d-grid gap-2">
        <Button variant="dark" size="sg" onClick={templateSelectOnClick}>선택</Button>
      </Card.Footer>
    </Card>
  )
}

export default QuestionnaireTemplateCard