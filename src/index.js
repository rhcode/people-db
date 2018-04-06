import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import './index.css'
import App from './components/App'

const initialState = {}
const str = configureStore(initialState)

ReactDOM.render(
  <Provider store={str}>
    <App />
  </Provider>,
  document.getElementById('main')
)
