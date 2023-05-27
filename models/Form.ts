import {forEach, get, set} from "lodash";
import {useApi} from "~/composables/api";
import {HttpMethods} from "~/composables/api";

export default class Form {
  originalData = {}
  /**
   *
   * @param {object} data
   */
  constructor(data: Object) {
    forEach(Object.keys(data), (key) => {
      set(this.originalData, key, get(data, key, null))
      set(this, key, get(data, key, null))
    })
  }

  /**
   * Return the form data
   * @returns {{}}
   */
  data() {
    const data = {}
    for (const property in this.originalData) {
      set(data, property, get(this, property, null))
    }
    return data
  }

  submit(url: string, method: HttpMethods, options = {}, additional = {}) {
    const methods = ["get", "delete"]
    const opt = {
      body: methods.includes(method) ? {} : this.data(),
      ...options
    }
    return useApi(url, method, opt, additional)
  }

  /**
   * Create a new Request
   *
   * @param url
   * @param options
   * @param additional
   * @return Promise
   */
  get(url: string, options = {}, additional = {}) {
    return this.submit(url, 'get', options, additional)
  }

  /**
   * Create a new Request
   *
   * @param url
   * @param options
   * @param additional
   * @return Promise
   */
  post(url: string, options = {}, additional = {}) {
    return this.submit(url, 'post', options, additional)
  }

  /**
   * Create a new Request
   *
   * @param url
   * @param options
   * @param additional
   * @return Promise
   */
  put(url: string, options = {}, additional = {}) {
    return this.submit(url, 'put', options, additional)
  }

  /**
   * Create a new Request
   *
   * @param url
   * @param options
   * @param additional
   * @return Promise
   */
  patch(url: string, options = {}, additional = {}) {
    return this.submit(url, 'patch', options, additional)
  }

  /**
   * Create a new Request
   *
   * @param url
   * @param options
   * @param additional
   * @return Promise
   */
  delete(url: string, options = {}, additional = {}) {
    return this.submit(url, 'delete', options, additional)
  }
}