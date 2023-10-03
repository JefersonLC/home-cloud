import type { Data } from '../types'

const API_URL = import.meta.env.VITE_API_URL

export async function getContent(path: string) {
  const res = await fetch(API_URL + path)

  if (!res.ok) throw new Error('Directory not found')

  const data = await res.json()
  
  return data as Data
}
