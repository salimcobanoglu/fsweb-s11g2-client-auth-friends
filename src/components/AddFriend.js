import React, { useState } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import { useHistory } from "react-router-dom";
export default function AddFriend() {
  const [friendData, setFriendData] = useState({
    name: "",
    email: "",
  });

  function handleChange(event) {
    setFriendData({
      ...friendData,
      [event.target.name]: event.target.value,
    });
  }
  const history = useHistory();

  //burda da eklemek istediğimiz kişi bilgilerini friendData statei ile tutarız.Form submit edilince data api/friendse ulaşır.

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/friends`, friendData)
      .then((response) => {
        console.log("friendData ulaştı", response.data);

        history.push("/friends");
      })
      .catch((err) => console.log("Error!", err));
  }

  return (
    <div>
      <div className="form-container">
        <h1 className="text-center">ADD FRIEND</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center">
          <label className="text-center m-9 ">
            {" "}
            FRIEND NAME
            <input
              className="bg-black text-white p-8 mb-7 ml-7 max-w-xl text-center"
              type="text"
              name="name"
              value={friendData.name}
              onChange={handleChange}
            />
          </label>
          <label className="text-center m-9 ">
            {" "}
            FRIEND EMAIL
            <input
              className="bg-black text-white p-8 mb-7 ml-7 max-w-xl text-center"
              type="email"
              name="email"
              value={friendData.email}
              onChange={handleChange}
            />
          </label>
          <button
            className="bg-black text-white text-center m-9 max-w-xxl p-8"
            type="submit"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
