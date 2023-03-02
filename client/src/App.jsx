import * as console from "./lib/console";
import { SingletonHooksContainer } from "react-singleton-hook";
import { Provider } from "react-redux";
import store from "./store/store";
import Home from "./pages/home/home.jsx";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
