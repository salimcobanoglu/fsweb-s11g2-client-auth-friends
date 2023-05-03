import { Redirect } from "react-router-dom";

export default function MyPrivateRoute({ children }) {
  const myToken = localStorage.getItem("friends");
  return myToken ? children : <Redirect to="/login" />;
}
