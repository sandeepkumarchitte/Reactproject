/**
 * Mocking client-server processing
 */
import _products from './products.json'

const TIMEOUT = 100

export default {

  getProducts(timeout = TIMEOUT) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(_products)
      }, timeout)
    })
  },

  buyProducts(payload, timeout = TIMEOUT) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, timeout)
    })
  }
}
