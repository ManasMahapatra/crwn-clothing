import React from 'react';
import ReactDOM from 'react-dom';
//Similarly Browser Router is the component that allows the whole app to access the router-dom
import { BrowserRouter } from 'react-router-dom';
//Provider is a component, we need to wrap our entire application , so that everything gets access to store component.
//Its a parent object which allows all it's child object to access the store component
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { store,persistor } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
   document.getElementById('root'));
