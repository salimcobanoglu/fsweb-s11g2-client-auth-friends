import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "workintech",
    password: "wecandoit",
  });

  let history = useHistory();

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post("http://localhost:9000/api/login", formData)
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("friends", res.data.token);
          history.push("/friendlist");
        }
      })
      .catch((error) => console.log(error.response));
  }

  return (
    <>
      <h2 className="text-xl font-bold p-2">LOGIN</h2>
      <form className="text-right" onSubmit={handleSubmit}>
        <label className="block mb-2">
          USERNAME
          <input
            onChange={handleChange}
            name="username"
            value={formData.username}
            type="text"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <label className="block mb-2">
          PASSWORD
          <input
            onChange={handleChange}
            name="password"
            value={formData.password}
            type="password"
            className="p-1 ml-2 border border-zinc-400 w-56 rounded text-sm"
          />
        </label>
        <button type="submit" className="px-4 py-2 bg-yellow-500 rounded">
          SUBMIT
        </button>
      </form>
    </>
  );
}
