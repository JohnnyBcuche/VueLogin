<template>
  <div id="app">
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

@media (min-width: 760px) {
.navbar-left{
	height: 100vh;
	width: 200px;
	position: fixed;
	}	
.navbar-left-min {
	display: hidden;
	}
}

.navbar-inverse .navbar-nav > li > a {
  font-size: 20px;
}

</style>
