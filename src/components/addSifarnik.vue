<template>
<div class="addSifarnik container container-width"><div class="razmak"></div>
<alert v-if="alert" v-bind:message="alert" class="margin"/>
<div class="razmak"></div>
<h1 class="page-header margin">Dodaj sifarnik</h1>
<div class="razmak"></div>
<form v-on:submit="addSifarnik" class="margin">
	<div class="well">
		<h4>Pasmina</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="breed" v-model="sifarnik.breed">
		</div>
	</div>
	<div class="well">
		<h4>Opis</h4>
		<div class="form-group">
			<input type="text" class="form-control" placeholder="description" v-model="sifarnik.description">
		</div>
	</div>
	<input type="submit" value="Dodaj" class="btn-sm btn-primary"><div class="razmak"></div>
</form>
</div>
</template>

<script>
import alert from './alert'
export default {
  name: 'addSifarnik',
  data () {
    return {
    	title: 'Home page.',
		  sifarnik: {},
      alert: '',
    }
  },
  methods:{
  	addSifarnik(e){
  		if(!this.sifarnik.breed || !this.sifarnik.description){
  			this.alert = "Sva polja moraju biti popunjena";
  		} else{
  			let newSifarnik = JSON.stringify({ breed: this.sifarnik.breed, description: this.sifarnik.description });
  		this.$http.post('http://localhost/slim/public/api/code', newSifarnik).then(function(response){
  			this.$router.push({path: '/pasmina', query:{alert:'Sifranik je dodan'}});
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