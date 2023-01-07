import Router from './routes/router';
import { Provider } from 'react-redux';
import store from './store/store';
import { fetchItems } from './store/actions/products';
import Products from './store/reducers/products';

function App() {
  fetchItems();
  return (
      <Provider store={store}>
        <Router />
      </Provider>
  );
}

export default App;
