<template>
<div class="addSifarnik container margin container-width"><div class="razmak"></div>
<alert v-if="alert" v-bind:message="alert"/>
<h1 class="page-header">Dodaj sifarnik</h1>
<form v-on:submit="addSifarnik">
	<div class="well">
		<h4>Pasmina</h4>
		<div class="form-group">
			<label for="">Ime breed</label>
			<input type="text" class="form-control" placeholder="Ime breed" v-model="sifarnik.breed">
		</div>
	</div>
	<div class="well">
		<h4>Opis</h4>
		<div class="form-group">
			<label for="">Opis</label>
			<input type="text" class="form-control" placeholder="description" v-model="sifarnik.description">
		</div>
	</div>
	<input type="submit" value="Dodaj" class="btn btn-primary"><div class="razmak"></div>
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
      alert: ''
    }
  },
  methods:{
  	addSifarnik(e){
  		if(!this.sifarnik.breed || !this.sifarnik.description){
  			this.alert = "Sva polja moraju biti popunjena";
  		} else{
  			let newSifarnik = JSON.stringify({ breed: this.sifarnik.breed, description: this.sifarnik.description });
  		this.$http.post('http://localhost/slim/public/api/code', newSifarnik).then(function(response){
  			this.$router.push({path: '/', query:{alert:'Sifranik je dodan'}});
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