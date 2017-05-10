<template>
  <div class="container editAnimal container-width"><div class="razmak"></div>

  <div class="margin">
  <router-link to="/animal"><i class="fa fa-arrow-circle-o-left font btn-default btn-lg height" aria-hidden="true"></i></router-link>
  <div class="height1"><h3><b>Zivotinja:</b></h3> <h4>{{Data.animal}}</h4><h3><b>Opis:</b></h3> <h4>{{Data.animal_description}}</h4></div>
  </div>

  <div class="razmak"></div>
  <span><button v-on:click="deleteData(Data.id)" class="btn-sm btn-danger margin">Izbrisi</button></span>
  <div class="razmak"></div>

  
  <form v-on:submit="editAnimal" class="margin">
  <div class="well">
  <alert v-if="alert" v-bind:message="alert"/>
    <h4>Animal</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Ime animal" v-model="Data.animal_name">
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
  <input type="submit" value="Izmeni" class="btn-sm btn-primary"><div class="razmak"></div>
</form>

  </div>
</template>

<script>
import alert from '../alert'
export default {
  name: 'editAnimal',
  data () {
    return {
      Data: '',
      alert: ''
    }
  },
  methods:{
    fetchData(id){
      this.$http.get('http://localhost/slim/public/api/animal/'+id).then(function(response){
    this.Data=response.data;
      });
    },
    deleteData(id){
    this.$http.delete('http://localhost/slim/public/api/animal/delete/'+id).then(function(response){
      this.$router.push({path: '/animal', query:{alert: "Zivotinja izbrisana!"}})
    });
    },
    editAnimal(e){
      if(!this.Data.animal_name || !this.Data.animal_description || !this.Data.sifarnik_id || !this.Data.date){
        this.alert = "Sva polja moraju biti popunjena";
      } else{
        let updateData = JSON.stringify({ animal_name: this.Data.animal_name, animal_description: this.Data.animal_description, sifarnik_id: this.Data.sifarnik_id, date: this.Data.date });
      this.$http.put('http://localhost/slim/public/api/animal/'+this.$route.params.id, updateData).then(function(response){
        this.$router.push({path: '/animal', query:{alert:'Zivotinja je izmenjena'}});
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
    this.fetchData(this.$route.params.id);
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