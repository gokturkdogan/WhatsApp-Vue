<template>
            <div class="sideBar__item" v-bind:class="{active: activeMessage}">
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
            </div>     
</template>

<script>
export default {
    name: 'SideBar',
    props: [
        'userName', 'lastMessage', 'activeMessage', 'userPhoto'
    ]
}
</script>

<style>
@import '../assets/css/sideBar.css';
</style>