interface Route {
  component: React.ReactElement,
  path: string,
  exact?: boolean,
  routes?:  Route[]
}

export const routes: Route[] = [];