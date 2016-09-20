import {
  ADD_TO_CART,
  CHECKOUT_PENDING,
  CHECKOUT_ERROR
} from 'constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

function addedIds (state = initialState.addedIds, action) {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    default:
      return state
  }
}

function quantityById (state = initialState.quantityById, action) {
  switch (action.type) {
    case ADD_TO_CART: // eslint-disable-line no-case-declarations
      const { productId } = action
      return Object.assign({}, state, {
        [productId]: (state[productId] || 0) + 1
      })
    default:
      return state
  }
}

export default function cart (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_PENDING:
      return initialState
    case CHECKOUT_ERROR:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export function getQuantity (state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds (state) {
  return state.addedIds
}
