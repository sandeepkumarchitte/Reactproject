import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'
import reducer from 'reducers'

const middleware = [
  thunk,
  promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
  })
]

export default function configureStore (initialState = {}) {
  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers/index').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
