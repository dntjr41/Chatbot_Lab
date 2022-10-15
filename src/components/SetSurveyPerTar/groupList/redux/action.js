import { FETCHDATA, FILTERDATA, EDITDATA, DELETEDATA } from "./actionType";

export const FetchData = (data) => {
  return {
    type: FETCHDATA,
    payload: data
  };
};

export const FilterData = (data) => {
  return {
    type: FILTERDATA,
    payload: data
  };
};

export const EditData = (data) => {
  return {
    type: EDITDATA,
    payload: data
  };
};

export const DeleteData = (data) => {
  return {
    type: DELETEDATA,
    payload: data
  };
};

export const getData = () => async (dispatch) => {
  await fetch(
    "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json?_page=${page}&_limit=3"
  )
    .then((data) => data.json())
    .then((res) => dispatch(FetchData(res)));
};