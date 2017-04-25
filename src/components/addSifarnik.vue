<template>
<div class="addSifarnik container margin container-width"><div class="razmak"></div>
<alert v-if="alert" v-bind:message="alert"/>
<h1 class="page-header">Dodaj sifarnik</h1>
<form v-on:submit="addSifarnik">
	<div class="well">
		<h4>Pasmina</h4>
		<div class="form-group">
			<label for="">Ime pasmina</label>
			<input type="text" class="form-control" placeholder="Ime pasmina" v-model="sifarnik.Pasmina">
		</div>
	</div>
	<div class="well">
		<h4>Description</h4>
		<div class="form-group">
			<label for="">Description</label>
			<input type="text" class="form-control" placeholder="Description" v-model="sifarnik.Description">
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
  		if(!this.sifarnik.Pasmina || !this.sifarnik.Description){
  			this.alert = "Sva polja moraju biti popunjena";
  		} else{
  			let newSifarnik = JSON.stringify({ Pasmina: this.sifarnik.Pasmina, Description: this.sifarnik.Description });
  		this.$http.post('http://localhost/slimapp/public/api/code', newSifarnik).then(function(response){
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