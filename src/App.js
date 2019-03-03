import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './store';
import Login from './pages/Login';






class App extends Component {

  render() {
    return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
          <Route exact   path="/" component={Login}/>
        
        </div>
      </Router>
      </PersistGate>
   </Provider>
    );
  }
}

export default App;
