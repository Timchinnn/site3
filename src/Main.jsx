import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import App from "./App";

function Main() {
  const history = useHistory();

  const handleShopButtonClick = () => {
    history.push("/app");
  };

  return (
    <div className="container">
      <div className="header">
        <a href="#" className="link">
          ВХОД
        </a>
        <a href="#" className="link">
          РЕГИСТРАЦИЯ
        </a>
      </div>
      <div className="content">
        <h1 className="title">BANSYS</h1>
        <p className="subtitle">Bansys - Банкоматы - Терминалы</p>
      </div>
      <div className="footer">
        <button className="shop-button" onClick={handleShopButtonClick}>
          ЗА ПОКУПКАМИ
        </button>
      </div>
    </div>
  );
}

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={App} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
