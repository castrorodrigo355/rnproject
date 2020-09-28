import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import {MyApp} from './views/myApp/myApp';

export default function App() {
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}