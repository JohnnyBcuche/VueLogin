<<<<<<< HEAD
<template>
<div class="container container-width">
<div class="razmak"></div>
<alert v-if="alert" v-bind:message='alert' class="margin"/><div class="razmak"></div>
        <div class="input-group margin SearchWidth">
        <!--Search-->
            <input type="text" class="form-control" id='search' placeholder="Search" v-on:input="debounceInput" v-model="filterInput" name="q">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
<div class="razmak"></div>
<div class="margin">

<nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a aria-label="Previous" v-on:click="previousPage">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="item in sifarnik.last_page" v-on:click="goToPage(item)"><a>{{item}}</a></li>
    <li>
      <a aria-label="Next" v-on:click="nextPage">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

<input type="text" v-on:input="goToPage(pageNumber)" v-model="pageNumber">
<table class="table table-bordered table-striped">
  <thead>
  	<tr>
  		<th width="35%" v-on:click="sortBy('breed')">Pasmina <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="55%" v-on:click="sortBy('description')">Opis <i class="pull-right glyphicon" :class="[!orderCount?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
      <th width="10%" class="center"><div class="none">Izmeni</div></th>
  	</tr>
  </thead>
  <tbody v-for="field in sifarnik.data">
  	<tr class="table-width">
  		<td>{{field.breed}}</td>
  		<td>{{field.description}}</td>
  		<td class="center"><router-link v-bind:to="'/editSifarnik/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
  	</tr>
  </tbody>
</table>

</div>
<div class="razmak"></div>
<router-link class="btn btn-primary margin" to="/addSifarnik">Dodaj</router-link><div class="razmak"></div>
</div>
</template>

<script>
import alert from './alert'
import InfiniteLoading from 'vue-infinite-loading';
export default {
  name: 'home',
  data () {
    return {
  		sifarnik: [],
      pagination: [],
      orderBy: 'id',
      orderDirection: 'ASC',
      orderCount: false,
      pageNumber: '',
      executed: false,
  		alert: '',
      filterInput: '',
      filterKey: '',
      resource_url: 'http://localhost/slim/public/api/codes',
      //Number of elements to show after clicking show more
      jumpLimiter: 10,
      //Starting number of elements
      startingLimiter: 12,
      counter: 1
    }
  },
  methods:{
    debounceInput: _.debounce(() => {
      this.filterKey = this.filterInput;
    }, 2000),
    //fetch all data from restful api
  	fetchSifarnik(url){
  		this.$http.get(url, {params:  {orderBy: this.orderBy, direction: this.orderDirection}}).then(function(response){
		  this.sifarnik=response.data;
  		});
  	},
    //method to go to the next page of the restful api
    nextPage(){
      if(this.sifarnik.next_page_url != null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.sifarnik.next_page_url;
        this.fetchSifarnik(this.resource_url);
        this.resource_url = url;
        this.executed = false;
      }
    },
    //method to go to the previous page of the restful api
    previousPage(){
      if(this.sifarnik.prev_page_url !=null && !this.executed)
      {
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + this.sifarnik.prev_page_url;
        this.fetchSifarnik(this.resource_url);
        this.resource_url = url;
        this.executed = false;
      }
    },
    //method to go to the selected page of the restful api
    goToPage(number){
      if(number > this.sifarnik.last_page)
        number = this.sifarnik.last_page;
      else if(number < 1)
        number = 1;
        this.executed = true;
        let url = this.resource_url;
        this.resource_url = this.resource_url + "?page="+parseInt(number);
        this.fetchSifarnik(this.resource_url);
        this.resource_url = url;
        this.executed = false;
    },
    filterBy(list, value){
      var metaphone = require('metaphone');
      value = metaphone(value);
      return list.filter(function(table){
      return (metaphone(table.breed).indexOf(value) > -1) || (metaphone(table.description).indexOf(value) > -1);
      });
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
        this.fetchSifarnik(this.resource_url, {params:  {orderBy: this.orderBy, direction: this.orderDirection}});
    },
    /*showMore: function(list, limit){
      if(this.filterInput != "")
        limit = list.length;
      return list.slice(0, limit);
    },*/
  },
  created: function(){
  	if(this.$route.query.alert){
  		this.alert = this.$route.query.alert;
  	}
		this.fetchSifarnik(this.resource_url);
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
</style>
=======
>>>>>>> 5084ff8608047d924689ab80b660af0be6ca352c
