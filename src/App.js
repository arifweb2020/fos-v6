/**
 * Entry point of App
 * Author : Arif
 */
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import './App.css';
import AppRoutes from './routes/AppRoutes';
// https://reqres.in/api/users?page=1 https://github.com/DEVfancybear/react-redux-pagination-server-side/blob/master/src/App.js
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


