import {defineStore} from "pinia";

type UserState = {
  user?: string | null,
  token?: string | null,
}

export const useAuthStore = defineStore('user', {
  state: (): UserState => ({
    token: null,
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isNotAuthenticated: (state) => !state.token,
    getToken: (state) => state.token,
    getUser: (state) => state.user,
  },
  actions: {
    setUser(value: string | null) {
      this.user = value
    },
    setToken(value: string | null){
      this.token = value
    },
    resetData() {
      this.user = null;
      this.token = null;
    }
  },
  persist: true,
})