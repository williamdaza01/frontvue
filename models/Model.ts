import {forEach, set, get} from "lodash";
import Form from "~/models/Form";

export default class Model extends Form {
  url
  constructor(url: string, data: Object) {
    super(data)
    this.url = url
  }
  
  setData(values: Object = {}) {
    forEach(Object.keys(values), (key) => {
      set(this, key, get(values, key, null))
    })
    return this
  }

  index(options = {}, additional = {}) {
    return this.get(`${this.url}`, options, additional)
  }
  show(id: string|number, options = {}, additional = {}) {
    return this.get(`${this.url}/${id}`, options, additional)
  }
  store(options = {}, additional = {}) {
    console.log(this.url);
    
    return this.post(`${this.url}`, options, additional)
  }
  update(id: string|number,options = {}, additional = {}) {
    return this.put(`${this.url}/${id}`, options, additional)
  }
  partialUpdate(id: string|number,options = {}, additional = {}) {
    return this.patch(`${this.url}/${id}`, options, additional)
  }
  destroy(id: string|number,options = {}, additional = {}) {
    return this.delete(`${this.url}/${id}`, options, additional)
  }
}