import React from 'react';
import { Provider } from 'react-redux';
import store from '@core/store';
import AppRouter from '@core/router';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
