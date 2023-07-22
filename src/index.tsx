import { createRoot } from 'react-dom/client';
import App from 'app/App';
import { Provider } from 'react-redux';
import { store } from 'shared/store';
import 'app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root') as Element);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
