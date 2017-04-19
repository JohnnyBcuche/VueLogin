<template>
<div class="container">
<div class="razmak"></div>
<div class="home">
<h3>{{msg}}</h3><br><div class="razmak"></div>
<input type="submit" value="Logout" class="btn-xs btn-primary" onclick="window.location.href='/login';"><div class="razmak"></div>
</div>
</div>
</template>

<script>
export default {
  name: 'logged',
  data () {
    return {
    	msg: 'You have successfully logged in!',
    }
  },
}
</script>

<style>
.home{
	margin: 20px 0px 0px 200px;
}
.razmak{
	width: 100%;
	height: 15px;
}
</style>