import shop from 'api/shop'
import * as types from 'constants/ActionTypes'

export function getAllProducts () {
  return {
    type: types.FETCH_PRODUCTS,
    payload: shop.getProducts()
  }
}

function addToCartUnsafe (productId) {
  return {
    type: types.ADD_TO_CART,
    productId
  }
}

export function addToCart (productId) {
  return (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

export function checkout (products) {
  return {
    type: types.CHECKOUT,
    payload: shop.buyProducts(products)
  }
}
