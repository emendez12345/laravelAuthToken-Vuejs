import { createApp } from 'vue'
import  {createRouter,createWebHashHistory} from 'vue-router'

import App from './App.vue';

//import User from './components/User.vue';
//import UserApi from './components/UserApi.vue';
import "sweetalert2/dist/sweetalert2.min.css";

import UserBorrador from './components/UserBorrador.vue';
import Register from './components/Register.vue';
import EditContact from './components/EditContact.vue';
import Login from './components/login.vue';


//definir objeto rutas

const routes=[
    {
      path:'/user',
      component: UserBorrador
    },
    {
        name:'Login',
        path:'/',
        component:Login

    },
  /*  {
        name: 'ContactList',
        path:'/contact',
        component:ContactList
    },*/
    {
        name: 'Register',
        path:'/register',
        component:Register
    },
    {
        name: 'EditContact',
        path:'/contact/edit/:idarticulo?',
        component:EditContact
    }

]

//crear objeto de vue router  --objeto de VR
const router=createRouter({
    history:createWebHashHistory(),
    routes
})


//instancia de vue

const app=createApp(App)
app.use(router)

.mount('#app')


