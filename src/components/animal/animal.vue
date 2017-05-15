<template>
<div class="container container-width">
<div class="razmak"></div>
<alert v-if="alert" v-bind:message='alert' class="margin"/><div class="razmak"></div>
<div class="spoji container">
  <div class="input-group margin SearchWidth pull-left">
  <!--Search-->
      <input type="text" class="form-control" id='search' placeholder="Search" v-on:input="searchTable(filterInput)" v-model="filterInput" name="q">
      <div class="input-group-btn">
          <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
      </div>
  </div>
  <router-link class="btn btn-primary margin pull-right addbutton" to="/addAnimal">Dodaj</router-link>
</div>
  <!--End of Search-->
<div class="razmak"></div>
<div class="margin">

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

    <li v-for="item in Data.last_page" v-on:click="goToPage(item)" v-if="item === pageNumber" class="active"><a>{{item}}</a></li>
    <li v-else v-on:click="goToPage(item)" ><a>{{item}}</a></li>

    <li v-if="pageNumber >= Data.last_page" class="disabled">
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

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th width="20%" v-on:click="sortBy('animal_name')">Ime <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="35%" v-on:click="sortBy('animal_description')">Opis <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="15%" v-on:click="sortBy('date')">Datum <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="20%" v-on:click="sortBy('breed_id')">Pasmina <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="10%" class="center"><div class="none">Izmeni</div></th>
    </tr>
  </thead>
  <tbody v-for="field in Data.data">
    <tr class="table-width">
      <td>{{field.animal_name}}</td>
      <td>{{field.animal_description}}</td>
      <td>{{field.date}}</td>
      <td>{{field.breed_id}}</td>
      <td class="center"><router-link v-bind:to="'/editAnimal/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
    </tr>
  </tbody>
</table>

</div>
<div class="razmak"></div>
</div>
</template>

<script>
import alert from '../alert'
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'home',
  data () {
    return {
      //used to take in items from database
      Data: [],
      /*=======================================================
      =            used to determin order of items            =
      =======================================================*/
      orderBy: 'id',
      orderDirection: 'ASC',
      orderCount: false,  
      
      /*=====  End of used to determin order of items  ======*/
      

      //curently selected page
      pageNumber: '',
      //used to check if the pagination link was already clicked
      executed: false,

      //for displaying message after changing items (CRUD)
      alert: '',

      //variable to store search input
      filterInput: '',

      resource_url: 'http://localhost/slim/public/api/animal',
    }
  },
  methods:{
    //fetches all data from restful api and passes in the params
    fetchData(url){
      this.$http.get(url, {params:  {orderBy: this.orderBy, direction: this.orderDirection, search: this.filterInput}}).then(function(response){
      this.Data=response.data;
      });
    },
    //method to go to the next page of the restful api - only executes on first click
    nextPage(){
      if(this.Data.next_page_url != null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.Data.next_page_url;
        this.fetchData(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        if(this.pageNumber < this.Data.last_page)
          this.pageNumber++;
      }
    },
    //method to go to the previous page of the restful api - only executes on first click
    previousPage(){
      if(this.Data.prev_page_url !=null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.Data.prev_page_url;
        this.fetchData(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        if(this.pageNumber > 1)
          this.pageNumber--;
      }
    },
    //method to go to the selected page of the restful api - only executes on first click
    goToPage(number){
      if(number > this.Data.last_page)
        number = this.Data.last_page;
      else if(number < 1)
        number = 1;
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + "?page="+parseInt(number);
        this.fetchData(this.resource_url);
        this.resource_url = url;
        this.executed = false;
        this.pageNumber = number;
    },
    //searches the table 
    searchTable(value){
      if(value != null)
      {
        this.filterInput = value;
        this.fetchData(this.resource_url, {params:  {search: this.filterInput}});
      }
    },
    sortBy: function(value) {
      this.orderBy = value;
      if(!this.orderCount){
        this.orderDirection = 'ASC';
        this.orderCount = true;
      }
      else{
        this.orderDirection = 'DESC';
        this.orderCount = false;
      }
        this.fetchData(this.resource_url, {params:  {orderBy: this.orderBy, direction: this.orderDirection}});
    },
  },
  //created is used to load fields when page loads
  created: function(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert;
    }
    this.fetchData(this.resource_url);
    this.pageNumber = 1;
  },
  components: {
    alert,
    VPaginator: VuePaginator,
    InfiniteLoading,
  }
}
</script>

<style>

.razmak{
  width: 100%;
  height: 15px;
}
.showButtons td{
  border: 1px solid blue !important;
}
.table{
  margin-bottom: 0px !important;
}
.spoji{
  display: inline;
}
</style>