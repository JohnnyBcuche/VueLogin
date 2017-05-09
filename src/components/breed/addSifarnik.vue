<template>
<div class="addData container container-width"><div class="razmak"></div>
<alert v-if="alert" v-bind:message="alert" class="margin"/>
<div class="razmak"></div>
<div class="margin">
  <router-link to="/breed"><i class="fa fa-arrow-circle-o-left font btn-default btn-lg height" aria-hidden="true"></i></router-link>
</div>
<h1 class="page-header margin">Dodaj Data</h1>
<div class="razmak"></div>
<form v-on:submit="addData" class="margin">
	<div class="well">
		<h4>Pasmina</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="breed" v-model="Data.breed">
		</div>
	</div>
	<div class="well">
		<h4>Opis</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="description" v-model="Data.description">
		</div>
	</div>
	<input type="submit" value="Dodaj" class="btn-sm btn-primary"><div class="razmak"></div>
</form>
</div>
</template>

<script>
import alert from '../alert'
export default {
  name: 'addData',
  data () {
    return {
    	title: 'Home page.',
		  Data: {},
      alert: '',
    }
  },
  methods:{
  	addData(e){
  		if(!this.Data.breed || !this.Data.description){
  			this.alert = "Sva polja moraju biti popunjena";
  		} else{
  			let newData = JSON.stringify({ breed: this.Data.breed, description: this.Data.description });
  		this.$http.post('http://localhost/slim/public/api/code', newData).then(function(response){
  			this.$router.push({path: '/breed', query:{alert:'Sifranik je dodan'}});
  		});
  			e.preventDefault();
  		}

  		e.preventDefault();
  	}
  },
  components: {
    alert
  },
  created: function(){

	}
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>