import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import Member from '@/components/Member'
import ShopCar from '@/components/ShopCar'
import Home from '@/components/Home'
import App from '@/App'

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        redirect:'/home'
    },{
        path: '/home',
        name: 'Home',
        component: Home
    },{
        path: '/search',
        name: 'Search',
        component: Search
    },{
        path: '/member',
        name: 'Member',
        component: Member
    },{
        path: '/shopCar',
        name: 'ShopCar',
        component: ShopCar
    },]
})
