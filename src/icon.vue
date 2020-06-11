<template>
<div>
    <svg class="g-icon">
      <use :xlink:href="`#i-${name}`"></use>
    </svg> 
</div>
    

</template>
<script>
export default {
    props:['name']
}
</script>
<style lang="scss">
.g-icon {
        width: 1em;
        height: 1em;
        vertical-align: middle;
      }
</style>