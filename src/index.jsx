import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { getAllProducts } from 'actions'
import App from 'containers/App'
import configureStore from 'store/configureStore'

const store = configureStore()

store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
