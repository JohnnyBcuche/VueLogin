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
.SearchWidth{
  width: 245px;
}
.font{
  font-size: 30px;
}
.container-width{
  width: 90%;
  word-wrap: break-word;
  text-align: justify;
}
.table{
  table-layout: fixed;
  word-wrap: break-word;
  text-align: justify;
}
.center{
  text-align: center;
}
.nav > li > a{
  color: #9D9D9D;
}
.nav > li > a:hover{
  color: white;
  background-color: inherit;
}
.dropdown{
  margin-top: -25px;
}
.dropdown li {
  font-size: 14px;
  line-height: 20px;
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
.nav > li > a{
  color: #9D9D9D;
  }
.nav > li > a:hover{
  color: white;
  background-color: inherit;
  }
.dropdown{
  margin-top: -25px;
  }
.dropdown li {
  font-size: 20px;
  }
}

@media (max-width: 1080px){
.none{
  display: none;
  }
}

@media (max-width: 520px){
.SearchWidth{
  width: auto;
  }
.addbutton{
  width: 100%;
  }
.pasmina-link{
  display: none;
  }
.navbar-nav {
  font-size: 17px;
  line-height: 10px;
  display: block;
  margin: 0 auto 0 50%;
  }
.dropdown li {
  font-size: 15px;
  line-height: 20px;
  }
}

</style>
