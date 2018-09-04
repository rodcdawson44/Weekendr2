import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import Router from './Router';
import LoginForm from'./components/LoginForm';

const App = () => (
    <Provider store={createStore(reducers)}>
      <View>
        <LoginForm />
      </View>
    </Provider>
  );

export default App;
