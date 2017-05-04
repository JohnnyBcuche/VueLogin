// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import VuePaginate from 'vue-paginate'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logged from './components/Logged'
import AddSifarnik from './components/addSifarnik'
import EditSifarnik from './components/editSifarnik'
import Pasmina from './components/Pasmina'
import Vrsta from './components/Vrsta'

Vue.use(vueResource)
Vue.use(VueRouter)
Vue.use(VuePaginate)
Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{path: '/', component: Home},
		{path: '/signup', component: Signup},
		{path: '/login', component: Login},
    {path: '/logged', component: Logged},
    {path: '/addSifarnik', component: AddSifarnik},
    {path: '/editSifarnik/:id', component: EditSifarnik},
    {path: '/pasmina', component: Pasmina},
    {path: '/vrsta', component: Vrsta},
	]
});

/* eslint-disable no-new */
new Vue({
	router,
  template: `<div id="app">
  <nav class="navbar-left navbar-inverse container">
  <a href="#" class="navbar-brand pasmina-link">Pasmine</a>
  
  <button class="navbar-toggle" data-toggle="collapse" data-target="#demo">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
    <div class="collapse navbar-collapse" id="demo">
      <ul class="nav navbar-nav">
        

        <li data-toggle="collapse" data-target="#demos">
        <a href="#">Menu<i class="fa fa-fw fa-caret-down"></i></a>
          <ul id="demos" class="collapse nav dropdown">
              <li><router-link to="/pasmina">Pasmina</router-link></li>
              <li><router-link to="/vrsta">Vrsta psa</router-link></li>
          </ul>
        </li><br>

        <li><router-link to="/">Home</router-link></li><br>
        <li><router-link to="/signup">Signup</router-link></li><br>
        <li><router-link to="/login">Login</router-link></li><br>
      </ul>
    </div>
  </nav>
  <router-view></router-view>
  </div>
  `,
}).$mount('#app')
