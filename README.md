# S.I.M. 2 

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Icons

Check out the available [icons](https://tabler-icons.io/)
Those needed icons should be added on 
```js
// 📁/theme/tabler.ts
import {IconName, OtherIcon, EtcIcon} from "@tabler/icons-vue"
const alisases: IconSet = {
  //...
  myIconName: IconName,
  //...
}
//...
```
After you can use the icon on components like ``<v-btn />``

```vuejs
<template>
  <v-icon icon="$myIconName"></v-icon>
</template>
```

## Forms

On ``📁/components/v-form`` exist a dynamic component that lets you create
forms based on JSON

```vue
  <template>
    <v-form-dynamic
      :schema="schema"
      hide-reset-button
      button-submit-text="login"
      :button-submit-props="{ block: true }"
      @on-submit="onSubmit"
    />
  <template/>
  <script setup lang="ts">
    const schema = [
      {
        name: 'username',
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
    ]
    const onSubmit = async (values: Object, isSubmitting: Boolean, form: any) => {
      // Form Values
      const {data, error, pending} = await $fetch("/api/endpoint", { body: values })
      // If ok data has response from server
      console.log(data)
      // If error cacth info on error var
      console.log(error)
      // When submit a form isSubmitting and pending is true and
      // pending is false when request ends
      // Useful to block inputs or buttons
      isSubmitting.value = pending.value
    }
  </script>
```

### Form Schema

Is a simple json with some properties

```js
import {FormSchema} from "~/types/dashboard";
const schema: FormSchema[] = [{
  name: 'Input name automaticly translate a label', // In folder 📁/locales/xx.json in key "inputs" are setted the names
  rules: "Check vee-validate documentation. Ej: 'required|email'",
  flex: "Is a number on screen 12/6/8",
  props: {
    // Input props or HTML, check Vuetify Docs
    prependInnerIcon: "$user",
    hint: "Digita tu usuario. Ej: nombre.apellido",
    minlength: 3,
    maxlength: 32,
  },
  as: "Input to draw (text|number|password|email|number|select...)"
}]
```

### Vee-Validate

Check out the [documentation](https://vee-validate.logaretm.com/v4/guide/global-validators#available-rules)
The custom rules can be added on ``📁/plugins/validate.ts``

```js
import { defineRule } from 'vee-validate';
defineRule('minMax', (value, [min, max]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  const numericValue = Number(value);
  if (numericValue < min) {
    return `This field must be greater than ${min}`;
  }
  if (numericValue > max) {
    return `This field must be less than ${max}`;
  }
  return true;
});
```
### Locales

Check out [documentation](https://i18n.nuxtjs.org/)

On folder ``📁/locales/xx.json`` you should add text key/values translation
The default and fallback language is Spanish "es.json"
```json
{
  "...": "...",
  "inputs": {
    "email": "Correo electrónico",
    "...": "..."
  },
  "more": "..."
}
```

### Theme
On folder ``📁/theme/colors.ts`` you can set the color variables to the project

### Types
On folder ``📁/types/xxx.ts`` you can create custom types

### Stores
Check out the [documentation](https://pinia.vuejs.org/) for storage management

### Models
On folder ``📁/models/xxx.ts`` you can define api calls.
Check out [useAsyncData docs](https://nuxt.com/docs/api/composables/use-async-data)

#### Form.ts
Is a base model that contains the HTTP actions (post|get|put|patch|delete)

#### Model.ts
Extends from Form.ts class and add generic call

// index => Get a list of the resource
// Ej: GET /api/users

// show => Get a specified resource
// Ej: GET /api/users/:id

// store => Create a new resource
// Ej: POST /api/users

// update => Update a specified resource
// Ej: PUT|PATCH /api/users/:id

// destroy => Delete a specified resource
// Ej: DELETE /api/users/:id

```js

const form = {
  name: null,
  email: null,
}

const schema = [
  {
    name: 'email',
    rules: "required|email|min:3|max:32",
    flex: 12,
    props: {
      minlength: 3,
      maxlength: 32,
    },
    as: "email"
  },
  {
    name: 'password',
    rules: "required|min:3|max:32",
    flex: 12,
    props: {
      minlength: 3,
      maxlength: 32,
    },
    as: "password"
  },
]

export class User extends Model {
  schema: FormSchema[]
  constructor(data = form) {
    super("/api/users", data)
    this.schema = schema;
  }
}

const model = new User()
// Usage to create an user
const {data, error, pending} = await model.setData(values).store()
```

### Middleware
You can define a middleware and use in specified pages or global pages.