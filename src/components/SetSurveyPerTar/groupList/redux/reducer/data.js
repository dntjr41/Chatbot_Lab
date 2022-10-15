import { FETCHDATA, FILTERDATA, EDITDATA, DELETEDATA } from "../actionType";
const init_state = {
  data: []
};

export const dataReducer = (state = init_state, { type, payload }) => {
  switch (type) {
    case FETCHDATA:
      return {
        ...state,
        data: payload
      };
    case FILTERDATA:
      return {
        ...state,
        data: filterData(state.data, payload)
      };
    case EDITDATA:
      return {
        ...state,
        data: editData(state.data, payload)
      };
    case DELETEDATA:
      return {
        ...state,
        data: deleteData(state.data, payload)
      };
    default:
      return state;
  }
};

const filterData = (data, key) => {
  key = key.toUpperCase();
  return data.filter(
    (user) =>
      user.name.toUpperCase().indexOf(key) > -1 ||
      user.email.toUpperCase().indexOf(key) > -1 ||
      user.role.toUpperCase().indexOf(key) > -1
  );
};

const editData = (data, key) => {
  return data;
  // return data.map((user) => {
  //   if (user.id === key.id) {
  //     user = {
  //       ...user,
  //       ...key
  //     };
  //   }
  // });
};

const deleteData = (data, key) => {
  const multipleIds = [];
  key.forEach((checked) => {
    multipleIds.push(checked.id);
  });
  return data.filter((el) => !multipleIds.includes(el.id));
};
