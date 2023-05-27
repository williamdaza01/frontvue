import {FetchContext} from "ofetch";
import {useAuthStore} from "~/stores/user";

export type HttpMethods = 'get' | 'post' | 'put' | 'patch' | 'delete' | 'options'
export const useApi = async (url: string, method: HttpMethods = 'get', extra: object = {}, additional: object = {}) => {
  const cookie = useCookie('XSRF-TOKEN')
  const config = useRuntimeConfig()
  const auth = useAuthStore()
  let formData = new URLSearchParams();
  let body = extra.body
  
  for (let key in body) {
    formData.append(key, body[key])
  }
  // @ts-ignore
  const opts = {
    key: url,
    baseURL: "https://jacgsaw.com/auth",
    async onRequest(request: FetchContext, response: FetchContext) {
      request.options.headers = request.options.headers || {}      
      if (cookie.value) {
        // @ts-ignore
        request.options.headers['X-XSRF-TOKEN'] = cookie.value
      }
      if (auth.isAuthenticated) {
        // @ts-ignore
        request.options.headers['Authorization'] = `Bearer ${auth.getToken}`
        
      }
    },
    async onRequestError(request: FetchContext) {
      console.log(request)
    },
    async onResponseError(response: FetchContext) {
      console.log(response.response?._data.message)
    },
    method,
    formData
  }
  const { data, pending, error, execute } = await useAsyncData(
    'auth',
    // @ts-ignore
    () => $fetch("https://jacgsaw.com/auth/login", {
      method: 'POST',
      body: formData
    }),
    additional
  )
  return {
    data, pending, error, execute
  }
}