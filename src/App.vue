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

.navbar-nav {
  font-size: 14px;
  display: flex;
}
.margin{
  margin: 10px auto;
}
.font{
  font-size: 25px;
}
.container-width{
  width: 90%;
  word-wrap: break-word;
}
.table{
  table-layout: fixed;
  word-wrap: break-word;
  text-align: justify;
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
  margin: 0 0 0 200px;
  }
.SearchWidth{
  width: 300px;
  }
.font{
  font-size: 39px;
  }
.container-width{
  width: 80%;
  word-wrap: break-word;
  text-align: justify;
  }
.table{
  table-layout: fixed;
  word-wrap: break-word;
  text-align: justify;
  }
}

</style>
