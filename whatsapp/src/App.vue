<template>
  <div id="app">

    <div class="sideBar">
      <SideBarHeader />
      <div class="sideBar__body">
        <SideBar 
        v-for="(message, index) in indexes"
              :key="index" 
              :activeMessage="index == activeIndex"
              :userName="message.user"
              :lastMessage="message.messages[0].content"
              v-on:click.native="activeIndex=index"
        />
      </div>
    </div>

  </div>
</template>

<script>
import SideBarHeader from './components/sideBarHeader.vue'
import SideBar from './components/sideBar.vue'
import messagesIndexes from './assets/js/messages'
export default {
  name: 'App',
  data: function () {
    return {
      indexes: messagesIndexes,
      activeIndex: 0,
      contentSend: "",
    }
  }
  ,
  components: {
    SideBarHeader,
    SideBar,
  },
  methods: {
    enviarMensagem: function(){
      let presentTime = new Date().getHours() + ":" + new Date().getMinutes();

      let newMessage = {
        time: presentTime,
        content: this.contentSend,
        send: true
      };

      this.indexes[this.activeIndex]
        .messages
        .push(newMessage);

      this.contentSend = "";
    }
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
