<template>
<div class="alert alert-success alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Success!</strong> {{ message }}
</div>
</template>

<script>
export default {
 name: 'PostSuccessMsg',
 props:['message']
 }
</script>