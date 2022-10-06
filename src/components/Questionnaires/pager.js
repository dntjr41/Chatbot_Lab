import Pagination from 'react-bootstrap/Pagination';

function Pager() {
    // 현재 보여주는 페이지
    let active = 10;
    // 컨텐츠 갯수
    let myQuestionnaireCount = 60;
    // 페이지 수
    let totalPage = Math.ceil(myQuestionnaireCount / 6);
    
    let items = [];
    if (active === 1 || active === 2){
        for (let number = 1; number < totalPage && number < 6; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>, 
            );
        }
    }
    else if (active === totalPage || active === totalPage - 1){
        for (let number = totalPage - 4 ; number <= totalPage; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>,
            );
        }
    }
    else {
        for (let number = active-2; number <= active+2; number++) {
            items.push(
                <Pagination.Item key={number} active={number === active}>
                    {number}
                </Pagination.Item>, 
            );
        }
    }

    return (
        <>
            <Pagination className="d-flex justify-content-center" >
                <Pagination.First />
                <Pagination.Prev />
                    {items}
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
      </>
    );
  }

export default Pager;