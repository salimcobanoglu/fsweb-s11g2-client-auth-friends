import "./App.css";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendList";
import Login from "./components/Login";
import { Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-row justify-center">
        <div className="flex justify-center p-6 m-4  border-b-4 border-black">
          <h1 className="text-black p-8 m-4 text-center  ">FRIENDS DATABASE</h1>
          <Link to="/login">
            <button className="bg-black text-white p-10 m-4">LOGIN.</button>
          </Link>
          <Link to="/friends">
            <button className="bg-black text-white p-10 m-4">
              FRIENDLIST.
            </button>
          </Link>
          <Link to="/friends/add">
            <button className="bg-black text-white p-10 m-4">ADDFRIEND.</button>
          </Link>
          <Link to="/logout">
            <button className="bg-black text-white p-10 m-4">LOGOUT</button>
          </Link>
        </div>
      </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/friends" component={FriendList} />
        <PrivateRoute exact path="/friends/add" component={AddFriend} />
        <PrivateRoute exact path="/logout" component={Logout} />
      </Switch>
    </div>
  );
}

export default App;
