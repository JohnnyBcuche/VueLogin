<template>
  <div id="app">
  <img src="./assets/twit.png" alt="">
    <login></login>
  </div>
</template>

<script>
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Logged from './components/Logged'

export default {
  name: 'app',
  components: {
    Home, Login, Signup, Logged
  }
}
</script>
<style>

.navbar-nav {
	font-size: 14px;
	display: flex;
}
.margin{
	margin: 40px auto;
}

@media (min-width: 768px) {
.navbar-left{
	height: 100vh;
	width: 200px;
	position: fixed;
	}	
.navbar-nav{
	font-size: 25px;
	display: inline-block;
	}
.navbar-inverse .navbar-nav > li > a:hover {
	border: 1px solid #9d9d9d;
	width: 160px;
	}
.margin{
	margin: 40px 0 0 200px;
	}
}

</style>
