import Vue from 'vue'
import Router from 'vue-router'
import store from './../store'

const Login = r => require.ensure([], () => r(require('@/pages/login/login')), 'login')
const Settlein = r => require.ensure([], () => r(require('@/pages/login/settlein')), 'settlein')
const Page = r => require.ensure([], () => r(require('@/pages/page/page')), 'page')
const Home = r => require.ensure([], () => r(require('@/pages/home/home')), 'home')
const Theme = r => require.ensure([], () => r(require('@/pages/theme/theme')), 'theme')
const Category = r => require.ensure([], () => r(require('@/pages/category/category')), 'category')
const addGoods = r => require.ensure([], () => r(require('@/pages/category/addGoods')), 'addGoods')
const Detail = r => require.ensure([], () => r(require('@/pages/detail/detail')), 'detail')
const Ceshi = r => require.ensure([], () => r(require('@/pages/detail/ceshi')), 'ceshi')
// const Cart = r => require.ensure([], () => r(require('@/pages/cart/cart')), 'cart')
const Order = r => require.ensure([], () => r(require('@/pages/order/order')), 'order')
const OrderData = r => require.ensure([], () => r(require('@/pages/order/orderData')), 'orderData')
const Address = r => require.ensure([], () => r(require('@/pages/address/address')), 'address')
// const User = r => require.ensure([], () => r(require('@/pages/user/user')), 'user')
// const About = r => require.ensure([], () => r(require('@/pages/about/about')), 'about')
const StoreInfo = r => require.ensure([], () => r(require('@/pages/stores/storeInfo')), 'storeInfo')
const ShopCenter = r => require.ensure([], () => r(require('@/pages/stores/shopCenter')), 'shopCenter')
const logo = r => require.ensure([], () => r(require('@/pages/stores/logo')), 'logo')
const people = r => require.ensure([], () => r(require('@/pages/stores/people')), 'people')
const shopinfo = r => require.ensure([], () => r(require('@/pages/stores/shopinfo')), 'shopinfo')
const phone = r => require.ensure([], () => r(require('@/pages/stores/phone')), 'phone')
const newphone = r => require.ensure([], () => r(require('@/pages/stores/newphone')), 'newphone')
const phonesuccess = r => require.ensure([], () => r(require('@/pages/stores/phonesuccess')), 'phonesuccess')
const storeer = r => require.ensure([], () => r(require('@/pages/stores/storeer')), 'storeer')
const changestore = r => require.ensure([], () => r(require('@/pages/stores/changestore')), 'changestore')
const shop = r => require.ensure([], () => r(require('@/pages/stores/shop')), 'shop')

Vue.use(Router)

const routes = [
    {
        path: '/',
        redirect: '/page'
    },
    {
        path: '/page',
        component: Page,
        children: [
            {
                path: '',
                redirect: '/page/home'
            },
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: '首页'
                },
                component: Home
            },
            {
                path: 'theme',
                name: 'theme',
                meta: {
                    title: '主题'
                },
                component: Theme
            },
            {
                path: 'category',
                name: 'category',
                meta: {
                    title: '店铺营销'
                },
                component: Category
            },
            {
                path: 'addGoods',
                name: 'addGoods',
                meta: {
                    title: '添加商品'
                },
                component: addGoods
            },
            {
                path: 'detail',
                name: 'detail',
                meta: {
                    title: '商品详情'
                },
                component: Detail
            },
            {
                path: 'ceshi',
                name: 'ceshi',
                meta: {
                    title: '测试'
                },
                component: Ceshi
            },
            // {
            //     path: 'cart',
            //     name: 'cart',
            //     meta: {
            //         title: '购物车',
            //         // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            //     },
            //     component: Cart
            // },
            {
                path: 'order',
                name: 'order',
                meta: {
                    title: '订单',
                    // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: Order
            },
            {
                path: 'orderData',
                name: 'orderData',
                meta: {
                    title: '店铺订单数据',
                    // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: OrderData
            },
            {
                path: 'address',
                name: 'address',
                meta: {
                    title: '地址',
                    // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
                },
                component: Address
            },
            // {
            //     path: 'user',
            //     name: 'user',
            //     meta: {
            //         title: '我的',
            //         // requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
            //     },
            //     component: User
            // },
            // {
            //     path: 'about',
            //     name: 'about',
            //     meta: {
            //         title: '关于'
            //     },
            //     component: About
            // },
            {
                path: 'storeInfo',
                name: 'storeInfo',
                meta: {
                    title: '店铺信息'
                },
                component: StoreInfo
            },
            {
                path: 'shopCenter',
                name: 'shopCenter',
                meta: {
                    title: '店铺中心'
                },
                component: ShopCenter
            },
            {
                path: 'logo',
                name: 'logo',
                meta: {
                    title: '品牌名称'
                },
                component: logo
            },
            ,
            {
                path: 'people',
                name: 'people',
                meta: {
                    title: '修改负责人'
                },
                component: people
            },
            {
                path: 'shopinfo',
                name: 'shopinfo',
                meta: {
                    title: '店铺介绍'
                },
                component: shopinfo
            },
            {
                path: 'phone',
                name: 'phone',
                meta: {
                    title: '修改手机号'
                },
                component: phone
            },
            {
                path: 'newphone',
                name: 'newphone',
                meta: {
                    title: '修改手机号'
                },
                component: newphone
            }
            ,
            {
                path: 'phonesuccess',
                name: 'phonesuccess',
                meta: {
                    title: '修改手机号成功'
                },
                component: phonesuccess
            }
            ,
            {
                path: 'storeer',
                name: 'storeer',
                meta: {
                    title: '店长管理'
                },
                component: storeer
            }
            ,
            {
                path: 'changestore',
                name: 'changestore',
                meta: {
                    title: '更换店长'
                },
                component: changestore
            }
            ,
            {
                path: 'shop',
                name: 'shop',
                meta: {
                    title: '店员管理'
                },
                component: shop
            }
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            title: '商家登录'
        }
    },
    {
        path: '/settlein',
        name: 'settlein',
        component: Settlein,
        meta: {
            title: '申请入驻'
        }
    },
    { path: '*', component: Home }
]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    // 设置标题
    document.title = to.meta.title
    store.commit('UPDATE_TITLE', to.meta.title)
    // loading
    store.commit('UPDATE_LOADING', true)
    if (to.matched.some(r => r.meta.requireAuth)) {
        if (localStorage.token) {
            next()
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

router.afterEach(function(to) {
    setTimeout(() => {
        store.commit('UPDATE_LOADING', false)
    }, 300)
})

export default router
