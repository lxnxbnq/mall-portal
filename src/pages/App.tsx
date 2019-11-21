import React from 'react';
import { Provider } from 'react-redux';
import store from '@core/store';
import AppRouter from '@core/router';
import './App.css';
import Layout from '@components/layout';

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
};

export default App;
