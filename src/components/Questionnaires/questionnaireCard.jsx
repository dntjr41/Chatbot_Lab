import React, { useState, useRef } from "react";
// bootstrap
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
// components
import QuestionnaireSetting from './questionnaireSetting';
// imgs
import testimg from '../../../src/images/Logo square.png';
// redux
import { SET_SQID } from '../../modules/questionnairesSlice';
import { useSelector, useDispatch } from 'react-redux';
// moment
import moment from 'moment';
// css
import '../../css/QuestionnairePage.css';

// title(설문 제목), onDeploy(배포여부), startTime(시작일), endTime(종료일), representativeImg(대표 이미지)
function QuestionnaireCard(props) {
  /* 리덕스 */
  const dispatch = useDispatch();
  const { questionnaireSelectionOption } = useSelector((state) => ({
    questionnaireSelectionOption: state.questionnairesReducer.questionnaireSelectionOption,
  }));

  /* 한 페이지에 정렬할 설문 카드*/
  const items = []
  if (questionnaireSelectionOption === 0) {
    items.push(
      <ListGroup.Item key={"questionnairescard:state:"+ props.id}>
        {
          props.surveyState
        }
      </ListGroup.Item>
    )
  }

  const questionnaireSettingButtonOnMouseEnter = () => {
    dispatch(SET_SQID(props.id));
    setShow(true);
  }
  const questionnaireSettingButtonOnMouseLeave = () => {
    setShow(false);
  }
  const [show, setShow] = useState(false);
  const target = useRef(null);
  const resultActive = (props.surveyState === "종료")
  /* main */
  return (
    <div>
      <Card
        bg='light'
        key={"questionnairescard" +props.id}
        text='dark'
        style={{ width: '15rem' }}
        className="mb-2"
      >
        <Card.Img variant="top" src={testimg} alt={props.id} />
        <Card.Body className="text-center">
          <Card.Title><b>{props.title}</b></Card.Title>
          <ListGroup>
            <ListGroup.Item key={"questionnairescard:time:"+ props.id}>

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