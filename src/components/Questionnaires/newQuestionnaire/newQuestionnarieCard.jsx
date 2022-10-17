import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { Link, useNavigate } from 'react-router-dom';
import { SET_QTPS_ON, SET_TSO } from '../../../modules/questionnairesSlice';
import { useDispatch } from 'react-redux';

function NewQuestionnaireCard(props) {
    /* 리덕스 */
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setTemplateSelectOption = () => {
        if (props.newQuestionnaireOption === "새 설문 작성"){
            navigate("/create-survey");   
        }
        else if (props.newQuestionnaireOption === "설문 템플릿 탐색"){
            dispatch(SET_TSO(0))
            dispatch(SET_QTPS_ON())
        }
        else if (props.newQuestionnaireOption === "이전 설문 가져오기"){
            dispatch(SET_TSO(1))
            dispatch(SET_QTPS_ON())
        } 
    }

    return (
        <a style={{ cursor: 'pointer' }}>
            <Card
                bg='light'
                key='Light'
                text='dark'
                style={{ width: '13rem' }}
                className="mb-2"
            >
                <Card.Img variant="top" src={props.cardImg} alt="Card image" />
                <Card.Body className="text-center d-grid gap-2">
                    <Button variant="dark" onClick={setTemplateSelectOption}>
                        {props.newQuestionnaireOption}
                    </Button>
                </Card.Body>
            </Card>
        </a>
    )
}

export default NewQuestionnaireCard