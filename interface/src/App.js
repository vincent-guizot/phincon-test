import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux";

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="main-content container-fluid">
          <Header></Header>
          <Content></Content>
          {/* <Footer></Footer> */}
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
