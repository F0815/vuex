<template>
  <div>
    <button @click="changenum('+')">+</button>
    <span>{{this.$store.state.app.num}}</span>
    <button @click="changenum('-')">-</button>

  </div>
</template>

<script>
export default {
 mounted() {
   console.log(this.$store)
 },
 methods: {
   changenum(type){
     this.$store.commit({
       type:'changenum',
       payload:type
     })
   }
 },
}
</script>

<style>

</style>
