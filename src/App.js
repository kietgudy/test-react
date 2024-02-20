import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header></Header>
      <div>
        Test Link
        <button>
          <Link to="/user">go to user</Link>
        </button>
        <button>
          <Link to="/admin">go to admin</Link>
        </button>
      </div>
    </div>
  );
};

export default App;
