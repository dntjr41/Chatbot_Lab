import { useDispatch } from "react-redux";
import { COPY_CARD, DEL_CARD, CHECK_OPT } from "../../../modules/createSurveySlice";

import { Stack, OverlayTrigger, Popover } from "react-bootstrap";
import { BsSubtract, BsTrashFill, BsThreeDotsVertical } from "react-icons/bs";


const CardMenu = function ({ questionCard, listIdx }) {
    const dispatch = useDispatch();

    // 질문 복사
    // listIdx(int): 질문 리스트의 몇번째인지
    const copyCard = (listIdx) => {
        dispatch(COPY_CARD(listIdx));
    }

    //질문 카드 삭제
    // listIdx(int): 질문 리스트의 몇번째인지
    const delCard = (listIdx) => {
        dispatch(DEL_CARD(listIdx));
    }

    // 질문 옵션 체크 업데이트
    // listIdx(int): 질문 리스트의 몇번째인지, optIdx(int): 옵션 리스트의 몇번째인지
    const checkOption = (listIdx, optIdx) => {
        dispatch(CHECK_OPT({ listIdx, optIdx }));
    }

    return (
        <>
            <Stack className="create-survey-cardMenu" direction="horizontal" gap={4}>
                <button className="ms-auto" type="button"><BsSubtract onClick={() => copyCard(listIdx)} /></button>
                <button type="button"><BsTrashFill style={{ color: "red" }} onClick={() => delCard(listIdx)} /></button>
                <OverlayTrigger trigger="click" placement="bottom" overlay={
                    <Popover>
                        <Popover.Body>
                            {
                                questionCard.questionOptions.map((option, optIdx) =>
                                    <div key={optIdx}>
                                        <input type="checkbox" checked={option} onChange={() => checkOption(listIdx, optIdx)} />
                                        {optIdx === 0 ? "필수응답" : optIdx === 1 ? "중복응답" : "응답섞기"}
                                    </div>
                                )
                            }
                        </Popover.Body>
                    </Popover>
                }>
                    <button type="button"><BsThreeDotsVertical /></button>
                </OverlayTrigger>
            </Stack>
        </>

    )
}

export default CardMenu;