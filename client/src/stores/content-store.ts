import { create } from 'zustand'
import type { Data } from '../types'

type State = {
  loading: boolean
  error: Error | null
  data: Data | null
}

type Action = {
  setData: (data: Data) => void
  setLoad: (load: boolean) => void
  setError: (error: Error | null) => void
}

export const useContent = create<State & Action>((set) => ({
  loading: false,
  error: null,
  data: null,

  setData: (data: Data) => set(() => ({ data })),
  setLoad: (load: boolean) => set(() => ({ loading: load })),
  setError: (error: Error | null) => set(() => ({ error })),
}))
