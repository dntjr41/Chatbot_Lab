import { useState } from "react";
import { useDispatch } from "react-redux";
import { EditData } from "../redux/action";

export const UserDataModal = ({ setClose, data }) => {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [role, setRole] = useState(data.role);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.preventDefault();
    const payload = {
      id: data.id,
      name,
      email,
      role
    };

    dispatch(EditData(payload));
    setClose(true);
  };
  return (
    <>
      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={role} onChange={(e) => setRole(e.target.value)} />
        <button onClick={handleChange}> OK</button>
      </form>
    </>
  );
};
