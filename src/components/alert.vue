<template>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    {{message}}
  </div>
</template>

<script>
export default {
  name: 'alert',
  props: ['message'],
  data () {
    return {
    }
  },
  methods:{
  },
  created: function(){

	}
}
</script>

<style>

.razmak{
	width: 100%;
	height: 15px;
}
</style>