import { Search } from "./Search";
import { useEffect, useState } from "react";
import "../user.css";
import { useDispatch, useSelector } from "react-redux";
import { DeleteData, FetchData, getData } from "../redux/action";
import { UserDataModal } from "./UserDataModal";

export const User = () => {
  const [checked, setChecked] = useState([]);
  const [close, setClose] = useState(true);
  const [selectedEdit, setSelectedEdit] = useState();
  const [selectAll, setSelectAll] = useState(true);
  const [page, setPage] = useState(1);

  const { data } = useSelector((state) => ({
    data: state.dataState.data
  }));
  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const dispatch = useDispatch();
  useEffect(($) => {
    dispatch(getData());
  }, []);

  const handleSelectAll = () => {
    selectAll ? setChecked(data) : setChecked([]);
    setSelectAll(!selectAll);
  };
  const handleDelete = (el) => {
    dispatch(DeleteData([el]));
  };
  const handleDeleteAll = () => {
    dispatch(DeleteData(checked));
  };
  const handleEdit = (e) => {
    setSelectedEdit(e);
    setClose(false);
  };
  return (
    <>
      <div id="cont">
        <Search />
        <hr></hr>

        <table className="table">
          <thead className="table head">
            <tr className="table">
              <input onChange={handleSelectAll} type="checkbox" />
              <td>Name</td>
              <td>Email</td>
              <td>Role</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <>
                  <tr>
                    <input
                      onChange={handleToggle(e)}
                      checked={checked.indexOf(e) !== -1}
                      type="checkbox"
                    />
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.role}</td>
                    <td onClick={($) => handleDelete(e)}>
                      <button className="delete btn">delete</button>
                    </td>
                    <td onClick={($) => handleEdit(e)}>
                      <button className="edit btn">edit</button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <button onClick={($) => handleDeleteAll()} className="selected btn">
        Delete Selected
      </button>
      <button
        onClick={() => {
          setPage(page - 1);
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next
      </button>
      {!close && <UserDataModal setClose={setClose} data={selectedEdit} />}
    </>
  );
};
