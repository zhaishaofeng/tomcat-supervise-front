import {HomeLayout} from '@/layouts'

/**
 * 路由配置
 */
export const constantRouterMap = [
    {
        path: '/',
        name: 'home',
        component: HomeLayout,
        redirect: '/setting',
        children: [
            {
                path: '/setting',
                name: 'Setting',
                component: () => import('@/views/setting/Setting')
            },
            {
                path: '/running',
                name: 'Running',
                component: () => import('@/views/running/Running')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('@/views/about/About')
            }
        ]
    }
]