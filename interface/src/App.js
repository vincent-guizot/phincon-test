import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import Header from "./components/Header.js";
import Content from "./components/Content.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-content w-100">
          <Header></Header>
          <Content></Content>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
