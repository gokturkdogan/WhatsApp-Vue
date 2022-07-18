<template>
        <div class="sideBarTopModule">
        <div class="sideBar__header">
            <div class="sideBar__profilePhoto">
                <img src="../assets/images/user1.jpg" alt="">

            </div>
            <div class="sideBar__headerIcons">
                <font-awesome-icon class="sideBar__headerIcon" icon="fa-solid fa-recycle" />
                <font-awesome-icon class="sideBar__headerIcon" icon="fa-solid fa-message" />
                <font-awesome-icon class="sideBar__headerIcon" icon="fa-solid fa-ellipsis-vertical" />
            </div>
        </div>
        <div class="sideBar__search">
            <div class="sideBar__searchArea">
                <font-awesome-icon class="sideBar__searchIcon" icon="fa-solid fa-magnifying-glass" />
                <input type="text" placeholder="Aratın veya bir konuşma başlatın">
            </div>
            <div class="sideBar_searchFilter">
                <font-awesome-icon class="sideBar__searchIcon" icon="fa-solid fa-bars" />
            </div>
        </div>
        <div class="sideBar__archive">
            <div class="sideBar__archiveIcons">
                <font-awesome-icon class="sideBar__archiveIcon" icon="fa-solid fa-arrow-down" />
            </div>
            <span>Arşivlenmiş</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SideBarHeader',
}
</script>

<style>
@import '../assets/css/sideBar.css';
</style>