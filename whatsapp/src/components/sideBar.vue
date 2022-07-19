<template>
    <div class="sideBar__item" v-bind:class="{active: activeMessage}">
        <div class="sideBar__senderInfo">
            <div class="sideBar__senderPhoto">
                <img v-bind:src="userPhoto" alt="">
            </div>
            <div class="sideBar__senderContent">
                <span class="--senderName">{{userName}}</span>
                <span class="--senderMessage">{{lastMessage}}</span>
            </div>
        </div>
        <div class="sideBar__senderTime">
            <span class="--senderTime">{{lastMessageTime}}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: [
        'userName', 'lastMessage', 'activeMessage', 'userPhoto', 'lastMessageTime'
    ]
}
</script>

<style>
@import '../assets/css/sideBar.css';
@import '../assets/css/spans.css';
</style>

<!-- <div class="sideBar__item" v-bind:class="{active: activeMessage}">
                <div class="sideBar__itemImage">
                    <img v-bind:src="userPhoto" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">{{userName}}</span>
                        <span class="sideBar__senderMessage">{{lastMessage}}</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div> --> 