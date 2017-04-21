<template>
  <div class="container editSifarnik">
  <router-link to="/">Nazad</router-link>
  <h1 class="page-header">Pasmina: {{sifarnik.Pasmina}}    Opis: {{sifarnik.Description}}</h1>
  <span><button v-on:click="deleteSifarnik(sifarnik.id)" class="btn btn-danger">Izbrisi</button></span>
  
  <form v-on:submit="editSifarnik">
  <div class="well">
  <alert v-if="alert" v-bind:message="alert"/>
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
  <input type="submit" value="Izmeni" class="btn btn-primary"><div class="razmak"></div>
</form>

  </div>
</template>

<script>
import alert from './alert'
export default {
  name: 'editSifarnik',
  data () {
    return {
      sifarnik: '',
      alert: ''
    }
  },
  methods:{
    fetchSifarnik(id){
      this.$http.get('http://localhost/slimapp/public/api/code/'+id).then(function(response){
    this.sifarnik=response.data;
      });
    },
      deleteSifarnik(id){
      this.$http.delete('http://localhost/slimapp/public/api/code/delete/'+id).then(function(response){
        this.$router.push({path: '/', query:{alert: "Sifarnik izbrisan!"}})
      });
      },

    editSifarnik(e){
      if(!this.sifarnik.Pasmina || !this.sifarnik.Description){
        this.alert = "Sva polja moraju biti popunjena";
      } else{
        let updateSifarnik = JSON.stringify({ Pasmina: this.sifarnik.Pasmina, Description: this.sifarnik.Description });
      this.$http.put('http://localhost/slimapp/public/api/code/'+this.$route.params.id, updateSifarnik).then(function(response){
        this.$router.push({path: '/', query:{alert:'Sifranik je izmenjen'}});
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
    this.fetchSifarnik(this.$route.params.id);
	}
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>