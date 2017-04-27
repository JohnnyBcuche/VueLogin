<template>
<div class="container container-width">
<div class="razmak"></div>
<alert v-if="alert" v-bind:message='alert' class="margin"/><div class="razmak"></div>
        <div class="input-group margin SearchWidth">
        <!--Search-->
            <input type="text" class="form-control" id='search' placeholder="Search" v-model="filterInput" name="q">
            <div class="input-group-btn">
                <button class="btn btn-default" type="submit"><i class="glyphicon glyphicon-search"></i></button>
            </div>
        </div>
<div class="razmak"></div>

<div class="margin">
<table class="table table-bordered table-striped">

 <thead>
	<tr>
		<th width="35%" v-on:click="orderBreed = !orderBreed">Pasmina <i class="pull-right glyphicon" :class="[orderBreed?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
    <th width="55%" v-on:click="orderDescription = !orderDescription">Opis <i class="pull-right glyphicon" :class="[orderDescription?'glyphicon-sort-by-alphabet-alt':'glyphicon-sort-by-alphabet']"></i></th>
    <th width="10%" class="center"><div class="none">Izmeni</div></th>
	</tr>
</thead>
<tbody v-for="field in filterBy(showMore(sifarnik, startingLimiter), filterInput)">
	<tr class="table-width">
		<td>{{field.id}}  {{field.breed}}</td>
		<td>{{field.description}}</td>
		<td class="center"><router-link v-bind:to="'/editSifarnik/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
	</tr>
</tbody><div class="btn-group btn-group-justified" role="group" aria-label="...">
<div class="btn-group" role="group">
    <button type="button" class="btn btn-default" v-on:click="startingLimiter += jumpLimiter">Show more</button>
  </div>
  <div class="btn-group" role="group">
    <button type="button" class="btn btn-default" v-on:click="startingLimiter = sifarnik.length" >Show all</button>
  </div>
</div>
    </table>
</div>
<router-link class="btn btn-primary margin" to="/addSifarnik">Dodaj</router-link><div class="razmak"></div>
</div>
</template>

<script>
import alert from './alert'
export default {
  name: 'home',
  data () {
    return {
  		sifarnik: [],
  		alert: '',
      filterInput: '',
      orderBreed:false, 
      orderDescription:false,
      resource_url: 'http://localhost/slim/public/api/codes',
      //Number of elements to show after clicking show more
      jumpLimiter: 5,
      //Starting number of elements
      startingLimiter: 5,
      counter: 1
    }
  },
  watch:{
    orderBreed: function (val) {
      var self = this;
      self.sifarnik = self.sortBy(self.sifarnik, 'breed', val);
    },

    orderDescription: function (val) {
      var self = this;
      self.sifarnik = self.sortBy(self.sifarnik, 'description', val);
    }

  },
  methods:{
  	fetchSifarnik(){
  		this.$http.get(this.resource_url).then(function(response){
		this.sifarnik=response.data;
  		});
  	},
    filterBy(list, value){
      value = value.toLowerCase();
      return list.filter(function(sifarnik){
      return (sifarnik.breed.toLowerCase().indexOf(value) > -1) || (sifarnik.description.toLowerCase().indexOf(value) > -1);
      });
    },
    sortBy: function(array, param, reverse) {
      var filterA, filterB;
      return array.sort(function (a, b) {
        switch (param) {
          case 'breed':
            filterA = a.breed;
            filterB = b.breed;
            break;
          case 'description':
            filterA = a.description;
            filterB = b.description;
            break;
        }
        if (reverse) {
          return (filterA > filterB) ? 1 : -1;
        } else {
          return (filterA < filterB) ? 1 : -1;
        }
      });
    },
    showMore: function(list, limit){
      if($.trim($("#search").val()) != "")
        return list;
      else
      return list.slice(0, limit);
    }
  },
  created: function(){
  	if(this.$route.query.alert){
  		this.alert = this.$route.query.alert;
  	}
		this.fetchSifarnik();
  	
	},
  components: {
  	alert,
    VPaginator: VuePaginator
  }
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>