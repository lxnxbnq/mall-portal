import MemberComponent from '@pages/member';
import About from '@pages/about';
import Home from '@pages/home';

export interface Route {
    component: React.ReactElement | React.FC;
    path: string;
    exact?: boolean;
    routes?: Route[];
    redirect?: string;
}

export const routes: Route[] = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/member',
        component: MemberComponent
    },
    {
        path: '/about',
        component: About
    }
];
