'use strict';


import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })
import appHeader from './cmps/app-header.cmp.js'


new Vue({
    el: '#app',
    created() {
        console.log('App has been Created!');
    },
    template: `
        <div>
            <app-header></app-header>
            <router-view></router-view>
        </div>
    `,
    components: {
        appHeader
    },
    methods: {},
    router: myRouter
})