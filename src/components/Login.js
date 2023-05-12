import React from "react";
import { useState } from "react";
import { axiosWithAuth } from "./AxiosAuth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    //  console.log(event.target.name);
  }
  const history = useHistory(); // form submit edilince /friends urlsine gidecek.

  function handleSubmit(event) {
    event.preventDefault();
    axiosWithAuth()
      .post(`/api/login`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        history.push("/friends");
        console.log("formData ulaştı", response.data);
      })
      .catch((err) => console.log("Error!", err));
  }

  return (
    <div className="form-container">
      <h1 className="text-center">LOGIN</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center">
        <label className="text-center m-9 ">
          {" "}
          USERNAME
          <input
            className="bg-black text-white p-8 mb-7 ml-7 max-w-xl text-center"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <label className="text-center m-9 ">
          {" "}
          PASSWORD
          <input
            className="bg-black text-white p-8 ml-7 max-w-xl text-center"
            type="password"
            name="password"
            value={formData.password}
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
  );
}
