import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteCake, createCake, buyCake } from "../redux";
export default function Cake() {
  const [cake, setCake] = useState({
    name: "hello",
    numOfCake: 0,
    type: "hiiii",
  });
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.cakes);

  const onChange = (e) => {
    let id = cakes.length + 1;
    let value;
    if (e.target.name == "numOfCake") {
      value = parseInt(e.target.value);
    } else {
      value = e.target.value;
    }

    setCake({ ...cake, id: id, [e.target.name]: value });
  };
  const onSubmitClick = (e) => {
    e.preventDefault();
    console.log(cake);
    dispatch(createCake(cake));
  };
  const removeCake = (e) => {
    console.log(e.target.value);
    dispatch(deleteCake(e.target.value));
  };
  const buyCakes = (e) => {
    dispatch(buyCake(e.target.value));
  };
  return (
    <div>
      <form>
        <div>
          <label>cake name</label>
          <input type="text" name="name" onChange={onChange} />
        </div>

        <div>
          <label>cake type</label>
          <input type="text" name="type" onChange={onChange} />
        </div>
        <div>
          <label>Number of cake</label>
          <input type="text" name="numOfCake" onChange={onChange} />
        </div>
        <div>
          <button type="submit" onClick={onSubmitClick}>
            submit
          </button>
        </div>
      </form>

      {console.log("cakes.....", cakes)}

      <table>
        <thead>
          <th>id</th>
          <th>cake name</th>
          <th>num of cake</th>
        </thead>
        {cakes.map((itme) => (
          <tbody key={itme.id}>
            <td>{itme.id}</td>
            <td>{itme.name}</td>
            <td>{itme.numOfCake} </td>
            <td>
              <button onClick={buyCakes} value={itme.id}>
                BUY CAKE
              </button>{" "}
            </td>
            <td>
              <button onClick={removeCake} value={itme.id}>
                REMOVE
              </button>{" "}
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
}
