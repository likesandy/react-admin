interface ApiData<T> {
  code: number
  status?: 'success' | 'error'
  message?: string
  data: T
}
