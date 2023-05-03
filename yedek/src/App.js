import "./App.css";
import LoginForm from "./components/LoginForm";
import { Link, Switch, Route } from "react-router-dom";
import FriendList from "./components/FriendList";
import MyPrivateRoute from "./components/MyPrivateRoute";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>FRIENDS DATABASE</h1>
        <nav className="navBox">
          <Link to="/" className="navLink">
            HOMEPAGE.
          </Link>
          <Link to="/login" className="navLink">
            LOGIN.
          </Link>
          <Link to="/friendlist" className="navLink">
            FRIENDLIST.
          </Link>
          <Link to="/addfriend" className="navLink">
            ADDFRIEND.
          </Link>
          <Link to="/logout" className="navLink">
            LOGOUT.
          </Link>
        </nav>
      </div>
      <div className="max-w-sm mx-auto">
        <Switch>
          <Route exact path="/">
            <div>hosgeldiniz, belki login olmayi dusunebilirsiniz</div>
          </Route>

          <MyPrivateRoute path="/friendlist">
            <FriendList />
          </MyPrivateRoute>

          <Route path="/login" component={LoginForm} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
