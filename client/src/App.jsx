import * as console from "./lib/console";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/home.jsx";
import "./App.css";
import Scrollbars from "react-custom-scrollbars-2";

const App = () => {
  return (
    <Provider store={store}>
      <Scrollbars style={{ width: "100%", height: "100vh", overflowX: "hidden", }}>
        <Home />
      </Scrollbars>
    </Provider>
  );
};

export default App;
