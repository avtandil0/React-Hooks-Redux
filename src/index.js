import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/Store'
import {Provider} from 'react-redux'
import App from './components/App'
import { BrowserRouter as Router,Switch,Route } from "react-router-dom"
import Login from "./components/login"


ReactDOM.render(
  <Provider store={store}>
      <Router>
          <Switch>
              <Route path='/Login'>
                  <Login />
              </Route>
              <Route path='/'>
                  <App />
              </Route>
          </Switch>
      </Router>
  </Provider>,
  document.getElementById('root')
)

