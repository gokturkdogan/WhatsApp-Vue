<template>
  <div id="app">
    <SideBar/>
  </div>
</template>

<script>
import SideBar from './components/sideBar.vue'
export default {
  name: 'App',
  components: {
    SideBar
  }
}
</script>


<style>

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    background: #111B21;
}

::-webkit-scrollbar-thumb {
    background: #202C33;
}
</style>
