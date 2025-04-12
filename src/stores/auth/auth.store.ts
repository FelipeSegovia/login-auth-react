import { create } from 'zustand/react'

interface AuthState {
  token: string
  setToken: (token: string) => void
  clearToken: () => void
}

export const useAuthStore = create<AuthState>()((set) => ({
  token: '',
  setToken: (token: string) => set({ token }),
  clearToken: () => {
    set({ token: '' })
    localStorage.removeItem('validateToken')
  },
}))
