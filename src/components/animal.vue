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
		<router-link class="btn btn-primary margin pull-right addbutton" to="/addSifarnik">Dodaj</router-link>
	</div>
	<div class="razmak"></div>
	
	<div class="margin">
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

			<li v-for="item in sifarnik.last_page" v-on:click="goToPage(item)" v-if="item === pageNumber" class="active"><a>{{item}}</a></li>
			<li v-else v-on:click="goToPage(item)" ><a>{{item}}</a></li>

			<li v-if="pageNumber >= sifarnik.last_page" class="disabled">
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
	
	</div>
	<div class="razmak"></div>
	</div>
</template>


<script>
	
</script>


<style>
	
</style>