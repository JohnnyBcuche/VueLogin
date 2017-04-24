// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logged from './components/Logged'
import AddSifarnik from './components/addSifarnik'
import EditSifarnik from './components/editSifarnik'

Vue.use(vueResource)
Vue.use(VueRouter)
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
	]
});

/* eslint-disable no-new */
new Vue({
	router,
  template: `<div id="app">
  <nav class="navbar-left navbar-inverse container">
  <a href="#" class="navbar-brand">Pasmine</a>
  <div class="navbar-nav">
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="q">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
        </div>
  <button class="navbar-toggle" data-toggle="collapse" data-target="#demo">
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
  	<div class="collapse navbar-collapse" id="demo">
  		<ul class="nav navbar-nav">
  			<li><router-link to="/">Home</router-link></li>
  			<li><router-link to="/signup">Signup</router-link></li>
        <li><router-link to="/login">Login</router-link></li>>
  		</ul>
  	</div>
  </nav>
  <router-view></router-view>
  </div>
  `,
}).$mount('#app')

