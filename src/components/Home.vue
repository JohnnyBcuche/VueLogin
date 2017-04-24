<template>
<div class="container">
<div class="razmak"></div>
<div class="home">
<h1>{{title}}</h1>
<alert v-if="alert" v-bind:message='alert'/>
</div>
<div class="table-responsive margin">

<table class="table">
 <thead>
	<tr>
		<th>Pasmina</th>
		<th>Opis</th>
	</tr>
</thead>
<tbody v-for="field in filterBy(sifarnik, filterInput)">
	<tr>
		<td>{{field.Pasmina}}</td>
		<td>{{field.Description}}</td>
		<td><router-link v-bind:to="'/editSifarnik/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
	</tr>
</tbody></table>
</div>
<router-link class="btn btn-primary margin" to="/addSifarnik">Dodaj</router-link>
</div>
</template>

<script>
import alert from './alert'
export default {
  name: 'home',
  data () {
    return {
    	title: 'Home page.',
  		sifarnik: [],
  		alert: '',
      filterInput: ''
    }
  },
  methods:{
  	fetchSifarnik(){
  		this.$http.get('http://localhost/slimapp/public/api/codes').then(function(response){
		this.sifarnik=response.data;
  		});
  	},
    filterBy(list, value){
      value = value.toLowerCase();
      return list.filter(function(sifarnik){
      return sifarnik.Description.toLowerCase().indexOf(value) > -1
      return sifarnik.Pasmina.toLowerCase().indexOf(value) > -1;
      });
    }
  },
  created: function(){
  	if(this.$route.query.alert){
  		this.alert = this.$route.query.alert;
  	}
		this.fetchSifarnik();
  	
	},
  components: {
  	alert,
  }
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>