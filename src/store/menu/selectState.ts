import { RootState } from '..'

export const selectCollapsed = (state: RootState) => state.menu.isCollapsed
