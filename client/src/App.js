import Router from './routes/router';
import { Provider } from 'react-redux';
import store from './store/store';
import ColorSchemesExample from './components/navbar/navbar';

function App() {
  return (
      <Provider store={store}>
        <ColorSchemesExample />
        <Router />
      </Provider>
  );
}

export default App;
