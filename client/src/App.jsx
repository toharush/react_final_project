import * as console from "./lib/console";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home.jsx";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
