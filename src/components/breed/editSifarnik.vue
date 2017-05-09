<template>
  <div class="container editSifarnik container-width"><div class="razmak"></div>

  <div class="margin">
  <router-link to="/breed"><i class="fa fa-arrow-circle-o-left font btn-default btn-lg height" aria-hidden="true"></i></router-link>
  <div class="height1"><h3><b>Pasmina:</b></h3> <h4>{{sifarnik.breed}}</h4><h3><b>Opis:</b></h3> <h4>{{sifarnik.description}}</h4></div>
  </div>

  <div class="razmak"></div>
  <span><button v-on:click="deleteSifarnik(sifarnik.id)" class="btn-sm btn-danger margin">Izbrisi</button></span>
  <div class="razmak"></div>

  
  <form v-on:submit="editSifarnik" class="margin">
  <div class="well">
  <alert v-if="alert" v-bind:message="alert"/>
    <h4>breed</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Ime breed" v-model="sifarnik.breed">
    </div>
  </div>
  <div class="well">
    <h4>Opis</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="description" v-model="sifarnik.description">
    </div>
  </div>
  <input type="submit" value="Izmeni" class="btn-sm btn-primary"><div class="razmak"></div>
</form>

  </div>
</template>

<script>
import alert from '../alert'
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
      this.$http.get('http://localhost/slim/public/api/code/'+id).then(function(response){
    this.sifarnik=response.data;
      });
    },
    deleteSifarnik(id){
    this.$http.delete('http://localhost/slim/public/api/code/delete/'+id).then(function(response){
      this.$router.push({path: '/breed', query:{alert: "Sifarnik izbrisan!"}})
    });
    },
    editSifarnik(e){
      if(!this.sifarnik.breed || !this.sifarnik.description){
        this.alert = "Sva polja moraju biti popunjena";
      } else{
        let updateSifarnik = JSON.stringify({ breed: this.sifarnik.breed, description: this.sifarnik.description });
      this.$http.put('http://localhost/slim/public/api/code/'+this.$route.params.id, updateSifarnik).then(function(response){
        this.$router.push({path: '/breed', query:{alert:'Sifranik je izmenjen'}});
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

@media (min-width: 768px){
.height{
  margin-left: -100px;
  }
.height1{
  margin-top: -65px;
  }
}

</style>