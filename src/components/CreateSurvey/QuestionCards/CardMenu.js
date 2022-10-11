import { useDispatch } from "react-redux";
import { COPY_CARD, DEL_CARD, CHECK_OPT } from "../../../modules/createSurveySlice";

import { Stack, Button, OverlayTrigger, Popover } from "react-bootstrap";
import { BsSubtract, BsTrashFill, BsThreeDotsVertical } from "react-icons/bs";


const CardMenu = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    const popover = (
        <Popover id="popover">
            <Popover.Header as="h3">옵션</Popover.Header>
            <Popover.Body>
                {
                    questionCard.options.map((option, optIdx) =>
                        <div key={optIdx}>
                            <input type="checkbox" defaultChecked={option} onClick={() => checkOption(listIdx, optIdx)} />
                            옵션{optIdx}
                        </div>
                    )
                }
            </Popover.Body>
        </Popover>
    )

    // 질문 복사
    const copyCard = (listIdx) => {
        dispatch(COPY_CARD(listIdx));
    }

    //질문 카드 삭제
    const delCard = (listIdx) => {
        dispatch(DEL_CARD(listIdx));
    }

    // 질문 옵션 체크 업데이트
    const checkOption = (listIdx, optIdx) => {
        dispatch(CHECK_OPT({ listIdx, optIdx }));
    }

    return (
        <>
            <Stack direction="horizontal" gap={4}>
                <BsSubtract className="ms-auto" onClick={() => copyCard(listIdx)} />
                <BsTrashFill onClick={() => delCard(listIdx)} />
                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <BsThreeDotsVertical />
                </OverlayTrigger>
            </Stack>

            <OverlayTrigger trigger="click" placement="right" overlay={
                <Popover id="popover-basic">
                    <Popover.Header as="h3">Popover right</Popover.Header>
                    <Popover.Body>
                        And here's some <strong>amazing</strong> content. It's very engaging.
                        right?
                    </Popover.Body>
                </Popover>
            }>
                <Button variant="success">Click me to see</Button>
            </OverlayTrigger>
        </>

    )
}

export default CardMenu;