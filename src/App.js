import React from 'react'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import store from './store'
import Users from './components/Users'

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Users/>
    </Provider>
  );
}

export default App;
