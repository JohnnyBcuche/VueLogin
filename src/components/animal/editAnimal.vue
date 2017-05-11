<template>
  <div class="container editAnimal container-width"><div class="razmak"></div>

  <div class="margin">
  <router-link to="/animal"><i class="fa fa-arrow-circle-o-left font btn-default btn-lg height" aria-hidden="true"></i></router-link>
  <div class="height1"><h3><b>Zivotinja:</b></h3> <h4>{{Data.animal}}</h4><h3><b>Opis:</b></h3> <h4>{{Data.animal_description}}</h4></div>
  </div>

  <div class="razmak"></div>
  <span><button v-on:click="deleteData(Data.id)" class="btn-sm btn-danger margin">Izbrisi</button></span>
  <div class="razmak"></div>

  <!-- Popup for choosing breed -->

<div id="GSCCModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
 <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;  </button>
        <h4 class="modal-title" id="myModalLabel">Izaberite pasminu</h4>
      </div>
      <div class="modal-body">

      <!--Search-->
      <input type="text" class="form-control" id='search' placeholder="Search" v-on:input="searchTable(filterInput)" v-model="filterInput" name="q">
      <div class="input-group-btn">
      </div>

        <!--Pagination-->
      <nav aria-label="Page navigation">
        <ul class="pagination">
          <li v-if="pageNumber <= 1" class="disabled">
            <a aria-label="Previous" v-on:click="previousPage">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li v-else>
            <a aria-label="Previous" v-on:click="previousPage">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>

          <li v-for="item in breed.last_page" v-on:click="goToPage(item)" v-if="item === pageNumber" class="active"><a>{{item}}</a></li>
          <li v-else v-on:click="goToPage(item)" ><a>{{item}}</a></li>

          <li v-if="pageNumber >= breed.last_page" class="disabled">
            <a aria-label="Next" v-on:click="nextPage">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
          <li v-else>
            <a aria-label="Next" v-on:click="nextPage">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
        <!--End of pagination-->

      <ul class="list-group">
        <li v-for="item in breed.data" class="list-group-item" v-on:click="returnBreedId(item.id)" data-dismiss="modal">{{item.name}}</li>
      </ul >
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- End of Popup for choosing breed -->

  
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
        <div class="span4 proj-div" data-toggle="modal" data-target="#GSCCModal"><input type="button" value="Izaberi"> <strong v-for="value in breed.data" v-if="breedId == value.id">Izabrali ste {{value.name}}</strong></div>
    </div>
  </div>
  <div class="well">
    <h4>Datum</h4>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="date" v-model="Data.date" id="datepicker">
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
      resource_url: 'http://localhost/slim/public/api/codes',
      Data: '',
      breed: [],
      breedId: '',
      alert: '',
      //curently selected page
      pageNumber: '',
      //used to check if the pagination link was already clicked
      executed: false,
      //variable to store search input
      filterInput: '',
    }
  },
  methods:{
    fetchData(id){
      this.$http.get('http://localhost/slim/public/api/animal/'+id).then(function(response){
    this.Data=response.data;
    this.breedId = this.Data.sifarnik_id;
      });
    },
    deleteData(id){
    this.$http.delete('http://localhost/slim/public/api/animal/delete/'+id).then(function(response){
      this.$router.push({path: '/animal', query:{alert: "Zivotinja izbrisana!"}})
    });
    },
    editAnimal(e){
      if(this.breedId == '')
        this.alert = "Niste izabrali pasminu";
      if(!this.Data.animal_name || !this.Data.animal_description || !this.Data.date){
        this.alert = "Sva polja moraju biti popunjena";
      } else{
        let updateData = JSON.stringify({ animal_name: this.Data.animal_name, animal_description: this.Data.animal_description, sifarnik_id: this.breedId, date: this.Data.date});
      this.$http.put('http://localhost/slim/public/api/animal/'+this.$route.params.id, updateData).then(function(response){
        this.$router.push({path: '/animal', query:{alert:'Zivotinja je izmenjena'}});
      });
        e.preventDefault();
      }

      e.preventDefault();
    },
    fetchBreed(url){
        this.$http.get(url, {params:  {orderBy: 'name', direction: 'ASC', search: this.filterInput}}).then(function(response){
        this.breed=response.data;
        });
      },
    returnBreedId(val){
      this.breedId = val;
    },

    //method to go to the next page of the restful api - only executes on first click
    nextPage(){
      if(this.breed.next_page_url != null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.breed.next_page_url;
        this.fetchBreed(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        if(this.pageNumber < this.breed.last_page)
          this.pageNumber++;
      }
    },
    //method to go to the previous page of the restful api - only executes on first click
    previousPage(){
      if(this.breed.prev_page_url !=null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.breed.prev_page_url;
        this.fetchBreed(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        if(this.pageNumber > 1)
          this.pageNumber--;
      }
    },
    //method to go to the selected page of the restful api - only executes on first click
    goToPage(number){
      if(number > this.breed.last_page)
        number = this.breed.last_page;
      else if(number < 1)
        number = 1;
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + "?page="+parseInt(number);
        this.fetchBreed(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        this.pageNumber = number;
    },
    //searches the table 
    searchTable(value){
      if(value != null)
      {
        this.filterInput = value;
        this.fetchBreed(this.resource_url, {params:  {search: this.filterInput}});
        console.log(this.filterInput);
      }
    },
  },
  components: {
    alert
  },
  created: function(){
    this.fetchData(this.$route.params.id);
    this.fetchBreed(this.resource_url);
    this.pageNumber = 1;
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