<template>
<div class="addAnimal container container-width"><div class="razmak"></div>
<alert v-if="alert" v-bind:message="alert" class="margin"/>
<div class="razmak"></div>
<div class="margin">
  <router-link to="/animal"><i class="fa fa-arrow-circle-o-left font btn-default btn-lg height" aria-hidden="true"></i></router-link>
</div>
<h1 class="page-header margin">Dodaj zivotinju</h1>
<div class="razmak"></div>
<form v-on:submit="addAnimal" class="margin">
  <div class="well">
    <h4>Animal</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="animal" v-model="Data.animal_name">
    </div>
  </div>
  <div class="well">
    <h4>Opis</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="description" v-model="Data.animal_description">
    </div>
  </div>
  <div class="well">
    <h4>Pasmina</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="breed" v-model="Data.sifarnik_id">
    </div>
  </div>
  <div class="well">
    <h4>Datum</h4>
    <div class="form-group">
      <input type="date" class="form-control" placeholder="date" v-model="Data.date" name="bday" min="2000-01-02" max="2015-12-12">
    </div>
  </div>
  <input type="submit" value="Dodaj" class="btn-sm btn-primary"><div class="razmak"></div>
</form>
</div>
</template>

<script>
import alert from '../alert'
export default {
  name: 'addAnimal',
  data () {
    return {
      title: 'Home page.',
      Data: {},
      alert: '',
    }
  },
  methods:{
    addAnimal(e){
      if(!this.Data.animal_name || !this.Data.animal_description || !this.Data.sifarnik_id || !this.Data.date){
        this.alert = "Sva polja moraju biti popunjena";
      } else{
        let newData = JSON.stringify({ animal_name: this.Data.animal_name, animal_description: this.Data.animal_description, sifarnik_id: this.Data.sifarnik_id, date: this.Data.date});
      this.$http.post('http://localhost/slim/public/api/animal', newData).then(function(response){
        this.$router.push({path: '/animal', query:{alert:'Zivotinja je dodana'}});
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