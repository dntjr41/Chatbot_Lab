import React, { useEffect, useState, useRef } from "react";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import testimg from '../../../src/images/Logo square.png';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

import '../../css/QuestionnairePage.css';

import QuestionnaireSetting from './questionnaireSetting';
import moment from 'moment';
import { SET_SQID } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';

// title(설문 제목), onDeploy(배포여부), startTime(시작일), endTime(종료일), representativeImg(대표 이미지)
function QuestionnaireCard(props) {
  /* 리덕스 */
  const dispatch = useDispatch();
  const { questionnaireSelectionOption } = useSelector((state) => ({
    questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
  }));

  const qState = "전체";
  const currentdatetime = moment(Date.now()).format('YYYY-MM-DDTHH:mm:ss');

  // 설문 상태 계산해서 push 함수
  const items = []
  if (questionnaireSelectionOption === 0) {
    items.push(
      <ListGroup.Item>
        {
          props.surveyState
        }
      </ListGroup.Item>
    )
  }

  const questionnaireSettingButtonOnMouseEnter = () => {
    dispatch(SET_SQID(props.id));
    setShow(true);
    console.log(resultActive);
  }
  const questionnaireSettingButtonOnMouseLeave = () => {
    setShow(false);
  }
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const resultActive = props.surveyState === "종료"
  return (
    <div>
      <Card
        bg='light'
        key={props.id}
        text='dark'
        style={{ width: '15rem' }}
        className="mb-2"
      >
        <Card.Img variant="top" src={testimg} alt={props.id} />
        <Card.Body className="text-center">
          <Card.Title><b>{props.title}</b></Card.Title>
          <ListGroup>
            <ListGroup.Item>

              {props.startTime ?
                <text id="dateTimeTextSize">
                  {moment(props.startTime).format('YYYY-MM-DD HH시') + " ~ " }
                  <br/>
                  {moment(props.endTime).format('YYYY-MM-DD HH시')}
                </text>
                : "배포기간 미지정"
              }

            </ListGroup.Item>
            {items}
          </ListGroup>
          <div className="d-grid gap-2">
            <Button
              ref={target} variant="dark" className="QustCardOptionButtonFloat ButtonPurple"
              onMouseEnter={questionnaireSettingButtonOnMouseEnter}
              onMouseLeave={questionnaireSettingButtonOnMouseLeave}>설정
            </Button>
            <Overlay target={target.current} show={show} placement="right">
              {(props) => (
                <Tooltip id="overlay-example" {...props}
                  onMouseEnter={questionnaireSettingButtonOnMouseEnter}
                  onMouseLeave={questionnaireSettingButtonOnMouseLeave}
                >
                  <QuestionnaireSetting resultActive={resultActive} />
                </Tooltip>
              )}
            </Overlay>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default QuestionnaireCard