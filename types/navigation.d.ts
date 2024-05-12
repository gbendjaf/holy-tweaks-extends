import type { RouteLocationRaw } from '#vue-router'

declare global {
  interface NavigationSimple {
    to: RouteLocationRaw,
    name: string,
    icon?: any,
    openNewPage?: boolean,
  }
  interface NavigationSubMenu {
    title: string
    routes: Array<{
      to: any | string,
      name: string,
      icon?: any
    }>,
  }
  interface NavigationPrimary {
    link: string,
    size: 'medium' | 'large'
    target?: string,
  }
}

// Add an export to ensure it is treated as a module
export {}