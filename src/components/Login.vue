<template>
<div class="container">
<div class="razmak"></div>
<form action="" v-on:submit="login" class="form-horizontal jumbotron vertical-center">
<fieldset class="container text-center">
<label>Username:</label><input type="text" v-model="newUser.email" class="form-control" placeholder="Enter username"><br><div class="razmak"></div>
<label>Password:</label><input type="password" v-model="newUser.password" class="form-control" placeholder="Enter password"><br><div class="razmak"></div>
<input type="submit" value="LogIn" class="btn-xs btn-primary"><div class="razmak"></div>
<h2 v-text = "poruka"></h2>
</fieldset>
</form>
</div>
</template>

<script>
export default {
  name: 'users',
    data() {
      return {
        newUser: {},
        users: [],
        poruka: "",
      }
    },
    methods:{
      login: function(e){
        var ulogovan = false;
        for(var i = 0; i< this.users.length; i++){
          if(this.newUser.email == this.users[i].email && this.newUser.password == this.users[i].password) {
            ulogovan = true;
          }
        }
        if(ulogovan==true){
          window.location.href = '/logged';
        }
        else {
          if(this.newUser.email == "" || this.newUser.password == "")
            this.poruka = "Sva polja moraju biti popunjena! ";
          else if(this.newUser.email.indexOf('@') == -1)
            this.poruka = "Username mora sadrzati @ simbol!"
          else
            this.poruka = "Uneli ste pogresne podatke.";
        }
        e.preventDefault();
      }
    },
    created: function(){
      this.$http.get('http://localhost/VueLogin/src/components/tabela.php')
      .then(function(response){
        this.users = response.data;
      });
    }
}
</script>

<style>
.form-horizontal{
      margin: 0 auto;
      width:40% 
  }
</style>