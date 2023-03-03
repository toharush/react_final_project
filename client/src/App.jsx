import * as console from "./lib/console";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/home.jsx";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
