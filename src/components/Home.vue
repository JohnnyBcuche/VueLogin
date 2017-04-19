<template>
<div class="container">
<div class="razmak"></div>
<div class="home">
<h1>{{title}}</h1>
</div>
</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    	title: 'Home page.',
    }
  }
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>