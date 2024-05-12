// Add an export to ensure it is treated as a module
export {}

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
      to: RouteLocationRaw | string,
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