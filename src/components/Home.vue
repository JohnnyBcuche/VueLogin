<template>
<div class="container container-width">
<div class="razmak"></div>
<alert v-if="alert" v-bind:message='alert' class="margin"/><div class="razmak"></div>
        <div class="input-group margin SearchWidth">
            <input type="text" class="form-control" placeholder="Search" v-model="filterInput" name="q">
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
<tbody v-for="field in filterBy(sifarnik, filterInput)">
	<tr class="table-width">
		<td>{{field.breed}}</td>
		<td>{{field.description}}</td>
		<td class="center"><router-link v-bind:to="'/editSifarnik/'+field.id"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></router-link></td>
	</tr>
</tbody></table>
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
      options: {
        remote_data: 'nested.data',
        remote_current_page: 'nested.current_page',
        remote_last_page: 'nested.last_page',
        remote_next_page_url: 'nested.next_page_url',
        remote_prev_page_url: 'nested.prev_page_url',
        next_button_text: 'Go Next',
        previous_button_text: 'Go Back'
      }
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
  		this.$http.get('http://localhost/slim/public/api/codes').then(function(response){
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
  },
  created: function(){
  	if(this.$route.query.alert){
  		this.alert = this.$route.query.alert;
  	}
		this.fetchSifarnik();
  	
	},
  components: {
  	alert,
  }
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>