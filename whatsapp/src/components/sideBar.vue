<template>
    <div class="sideBar">
        <div class="sideBar__header">
            <div class="sideBar__profilePhoto">
                <img src="../assets/logo.png" alt="">
            </div>
            <div class="sideBar__headerIcons">

            </div>
        </div>
        <div class="sideBar__search">
            <input type="text">
        </div>
        <div class="sideBar__archive">
            <span>Arşivlenmiş</span>
        </div>
        <div class="sideBar__body">
            <div class="sideBar__item">
                <img src="../assets/logo.png" alt="">
                <div class="sideBar__sender">
                    <span>Senders Name</span>
                    <span>Last Message</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        msg: String
    }
}
</script>

<style>
    .sideBar{
        background-color: red;
    }
    .sideBar__header{

    }
    .sideBar__profilePhoto{
        
    }
    .sideBar__profilePhoto img{
        border-radius: 55px;
        width: 40px;
    }
</style>