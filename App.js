import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigation from './components/Navigation';

export default function App() {
  return (
      <Provider store={store}>
        <Navigation />
      </Provider>
  );
}
