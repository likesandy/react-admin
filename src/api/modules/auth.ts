import tRequest from '..'
import { IAuthButtons } from '../interface'

export function getAuthorButtons(): Promise<IAuthButtons> {
  return tRequest.get('/auth/buttons')
}
