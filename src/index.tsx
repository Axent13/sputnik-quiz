import { createRoot } from 'react-dom/client';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from './store';
import 'index.scss';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
