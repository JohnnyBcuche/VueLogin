<template>
<div class="container">
<div class="razmak"></div>
<form action="" v-on:submit="addUser" class="form-horizontal jumbotron vertical-center">
<fieldset class="container text-center">
<label>Username:</label><input type="text" v-model='newUser.username' class="form-control" placeholder="Enter username"><br><div class="razmak"></div>
<label>Email:</label><input type="text" v-model='newUser.email' class="form-control" placeholder="Enter e-mail"><br><div class="razmak"></div>
<label>Password:</label><input type="text" v-model='newUser.password' class="form-control" placeholder="Enter password"><br><div class="razmak"></div>
<input type="submit" value="Sign Up" class="btn-primary btn-xs"><div class="razmak"></div>
</fieldset>
</form>
<ul>
	<div class="row list-group margin">
	<li v-for="user in users" class="list-group-item">
		<div class="panel panel-info">
		<div class="panel-heading">
		Username: {{user.username}} 
		</div>
		<div class="panel-body">
		Email: {{user.email}} <br>Password: {{user.password}}
		</div>
		</div>
	</li >
	</div>
</ul>
</div>
</template>

<script>
export default {
  name: 'signup',
  data () {
    return {
    	newUser:{},
		users: []
    }
  },
  methods:{
			addUser: function(e){
				console.log('add');
				this.users.push({
					username: this.newUser.username,
					email: this.newUser.email,
					password: this.newUser.password,
					contacted: false
				});
			//	window.location.href = '/login';
				e.preventDefault();
			},
			
		},
  created: function(){
		this.$http.get('http://localhost/VueLogin/src/components/tabela.php').then(function(response){
		this.users=response.data;
		})
	}
}
</script>

<style>
li{
	border: 0;
	padding: 0;
	margin: 0;
}
ul{
	padding-top: 20px;
}
.form-horizontal{
    margin: 40px 0 0 200px;
    width: 40%;
    position: relative;
    left: 20%;
}

@media (max-width: 768px){
.form-horizontal{
	margin: 40px auto;
	width: 70%;
    left: 0%;
	}
}

</style>