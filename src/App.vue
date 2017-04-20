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
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<style src="../src/assets/css/bootstrap.css">

</style>
