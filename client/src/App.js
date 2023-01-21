import Router from './routes/router';
import { Provider } from 'react-redux';
import store from './store/store';
import CustomNavbar from './components/navbar/navbar';

function App() {
  return (
      <Provider store={store}>
        <CustomNavbar />
        <Router />
      </Provider>
  );
}

export default App;
