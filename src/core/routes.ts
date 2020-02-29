import Layout from '@components/layout';

import Home from '@pages/home';
import Classify from '@pages/classify';
import Topic from '@pages/topic';
import Mine from '@pages/mine';

export interface Route {
  component?: React.ReactElement | React.FC | React.ReactNode;
  path: string;
  exact?: boolean;
  routes?: Route[];
  redirect?: string;
}

export const routes: Route[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    routes: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/classify',
        component: Classify
      },
      {
        path: '/topic',
        component: Topic
      },
      {
        path: '/mine',
        component: Mine
      }
    ]
  }
];
