import { ThemeConfigType } from '@/store/interface'

import { disable as disableDarkMode, enable as enableDarkMode } from 'darkreader'

/**
 * @description 全局主题设置
 * */
const useTheme = (themeConfig: ThemeConfigType) => {
  const { weakOrGray, isDark } = themeConfig
  const initTheme = () => {
    // 灰色和弱色切换
    const body = document.documentElement as HTMLElement
    if (!weakOrGray) body.setAttribute('style', '')
    if (weakOrGray === 'weak') body.setAttribute('style', 'filter: invert(80%)')
    if (weakOrGray === 'gray') body.setAttribute('style', 'filter: grayscale(1)')
    if (isDark) {
      enableDarkMode({
        brightness: 100,
        contrast: 90,
        sepia: 10,
      })
    } else {
      disableDarkMode()
    }
  }

  initTheme()

  return {
    initTheme,
  }
}

export default useTheme
