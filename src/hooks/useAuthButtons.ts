import { routerArray } from '@/routers'
import { RootState, useSelector } from '@/store'
import { searchRoute } from '@/utils/utils'
import { useLocation } from 'react-router-dom'

export function useAuthButtons() {
  const authButtonList = useSelector((state: RootState) => state.auth.authButtonList)
  const { pathname } = useLocation()
  const route = searchRoute(pathname, routerArray)
  let currentPageAuthButton: { [key: string]: boolean } = {}
  const buttons = (authButtonList[route.meta!.key!] || []).forEach((item) => {
    currentPageAuthButton[item] = true
  })

  return {
    BUTTONS: currentPageAuthButton,
  }
}

export default useAuthButtons
