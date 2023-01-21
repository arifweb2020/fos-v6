/**
 * Entry point of App
 * Author : Arif
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App;
