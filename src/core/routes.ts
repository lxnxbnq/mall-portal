import MemberComponent from '@pages/member';
import About from '@pages/about';

export interface Route {
  component: React.ReactElement | React.FC;
  path: string;
  exact?: boolean;
  routes?: Route[];
  redirect?: string;
}

export const routes: Route[] = [
  {
    component: MemberComponent,
    path: '/member'
  },
  {
    component: About,
    path: '/about'
  }
];
