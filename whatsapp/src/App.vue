<template>
  <div id="app">

    <div class="sideBar">
        <SideBarHeader/>
        <SideBar/>
    </div>
    
  </div>
</template>

<script>
import SideBarHeader from './components/sideBarHeader.vue'
import SideBar from './components/sideBar.vue'
export default {
  name: 'App',
  components: {
    SideBarHeader,
    SideBar
  }
}
</script>


<style>
@import 'assets/css/sideBar.css';

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
