import { useState } from "react";
import { useDispatch } from "react-redux";
import { FilterData, getData } from "../redux/action";

export const Search = () => {
  const [key, setKey] = useState("");
  const dispatch = useDispatch();
  const filter = (e) => {
    if (key.length > e.target.value.length) {
      dispatch(getData());
    }
    setKey(e.target.value);
    dispatch(FilterData(key));
  };

  return (
    <div>
      <form>
        <input
          value={key}
          onChange={filter}
          type="text"
          placeholder="Search by name, email or role"
        />
      </form>
    </div>
  );
};
