import {LoginForm} from "~/types/forms/forms";
import Model from "~/models/Model";
import {FormSchema} from "~/types/dashboard";

const form: LoginForm = {
  user: null,
  pacc: null,
  key: "987342748AC"
}

const schema: FormSchema[] = [
  {
    name: 'user',
    rules: "required|alpha_dots|min:3|max:32",
    flex: 12,
    props: {
      prependInnerIcon: "$user",
      hint: "Digita tu usuario. Ej: nombre.apellido",
      minlength: 3,
      maxlength: 32,
    },
    as: "text"
  },
  {
    name: 'pacc',
    rules: "required|min:3|max:32",
    flex: 12,
    props: {
      minlength: 3,
      maxlength: 32,
    },
    as: "password"
  },
  {
    name: 'key',
    rules: "required|min:3|max:32",
    flex: 12,
    props: {
      minlength: 3,
      maxlength: 32,
    },
    as: "text"
  },
]

/**
 * Handle Login
 *
 * @property {FormSchema[]} schema
 * @property {string|null} username
 * @property {string|null} password
 */
export class Auth extends Model {
  schema: FormSchema[]
  constructor(data: LoginForm = form) {
    super('/login', data)
    this.schema = schema;
  }
  login(options = {}, additional = {}) {
    return this.store(options, additional)
  }
  logout(options = {}, additional = {}) {
    return this.post("/logout", options, additional)
  }
}