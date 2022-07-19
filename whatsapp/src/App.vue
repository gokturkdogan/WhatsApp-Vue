<template>
  <div id="app">

    <div class="sideBar">
      <SideBarHeader />
      <div class="sideBar__body">
        <SideBar v-for="(message, index) in indexes" :key="index" :activeMessage="index == activeIndex"
          :userPhoto="message.image" :userName="message.user" :lastMessage="message.messages[0].content"
          v-on:click.native="activeIndex = index" />
      </div>
    </div>
    <div class="messageView">
      <div class="messageView__header">
        <div class="messageView__user">
          <img v-bind:src="indexes[activeIndex].image" alt="">
          <span>{{ indexes[activeIndex].user }}</span>
        </div>
        <div class="messageView__headerIcons">
          <font-awesome-icon class="messageView__headerIcon" icon="fa-solid fa-magnifying-glass" />
          <font-awesome-icon class="messageView__headerIcon" icon="fa-solid fa-ellipsis-vertical" />
        </div>
      </div>
      <div class="messageView__body">
        <MessageViewBody :content="message.content" :time="message.time" :send="message.send"
          v-for="(message, index_) in indexes[activeIndex].messages" :key="index_" />
      </div>
      <div class="messageView__footer">
        <div class="messageView__footerIcons">
          <font-awesome-icon class="messageView__footerIcon" icon="fa-solid fa-face-laugh-beam" />
          <font-awesome-icon class="messageView__footerIcon" icon="fa-solid fa-paperclip" />
        </div>
        <div class="messageView__input">
          <input type="text" v-on:keyup.enter="sendMessage" placeholder="Bir mesaj yazın" v-model="contentSend">
        </div>
        <font-awesome-icon class="messageView__footerIcon" icon="fa-solid fa-microphone" />
      </div>
    </div>

  </div>
</template>

<script>
import SideBarHeader from './components/sideBarHeader.vue'
import SideBar from './components/sideBar.vue'
import messagesIndexes from './assets/js/messages'
import MessageViewBody from './components/messageViewBody.vue'
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
    MessageViewBody
  },
  methods: {
    sendMessage: function () {
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
@import 'assets/css/messageView.css';

#app {
  display: flex;
  padding: 10px 150px;
}

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
