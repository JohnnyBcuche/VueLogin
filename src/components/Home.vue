<template>
<div class="container container-width">
<div class="razmak"></div>
<alert v-if="alert" v-bind:message='alert' class="margin"/><div class="razmak"></div>
        <div class="input-group margin SearchWidth">
            <input type="text" class="form-control" placeholder="Search" v-model="filterInput" name="q">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
<div class="razmak"></div>

<div class="table-responsive margin">
<table class="table table-bordered table-striped">
<colgroup>
  <col class="col-md-5 col-sm-5">
  <col class="col-md-7 col-sm-7">
  <col class="col-md-1 col-sm-1">
</colgroup>
 <thead>
	<tr>
		<th>Pasmina</th>
		<th colspan="2">Opis</th>
    <th></th>
	</tr>
</thead>
<tbody v-for="field in filterBy(sifarnik, filterInput)">
	<tr class="table-width">
		<td>{{field.Pasmina}}</td>
		<td>{{field.Description}}</td>
		<td><router-link v-bind:to="'/editSifarnik/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
	</tr>
</tbody></table>
</div>
<router-link class="btn btn-primary margin" to="/addSifarnik">Dodaj</router-link><div class="razmak"></div>
</div>
</template>

<script>
import alert from './alert'
export default {
  name: 'home',
  data () {
    return {
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
      return (sifarnik.Pasmina.toLowerCase().indexOf(value) > -1) || (sifarnik.Description.toLowerCase().indexOf(value) > -1);
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