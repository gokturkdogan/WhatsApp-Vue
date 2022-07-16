<template>
    <div class="sideBar">
        <div class="sideBar__header">
            <div class="sideBar__profilePhoto">
                <img src="../assets/user1.jpg" alt="">

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
        <div class="sideBar__body">
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
                </div>
            </div>
            <div class="sideBar__item">
                <div class="sideBar__itemImage">
                    <img src="../assets/user2.jpg" alt="">
                </div>
                <div class="sideBar__sender">
                    <div class="sideBar__senderInfo">
                        <span class="sideBar__senderName">Senders Name</span>
                        <span class="sideBar__senderMessage">Last Message</span>
                    </div>
                    <div class="sideBar__senderMessageTime">
                        <span>10:37</span>
                    </div>
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
.sideBar {
    width: 700px;
}

.sideBar__header {
    display: flex;
    justify-content: space-between;
    background-color: #202C33;
    padding: 10px 20px;
}

.sideBar__profilePhoto {

}

.sideBar__profilePhoto img {
    width: 65px;
    border-radius: 55px;
    width: 55px;
    cursor: pointer;
}

.sideBar__headerIcons {
    display: flex;
    justify-content: space-between;
    width: 200px;
    padding-right: 35px;
}

.sideBar__headerIcon {
    margin-top: 10px;
    font-size: 30px;
    color: #AEBAC1;
    cursor: pointer;
}

.sideBar__search {
    display: flex;
    justify-content: space-between;
    background-color: #111B21;
    border-bottom: 1px solid #202C33;
    padding: 10px 15px;
}

.sideBar__searchArea {
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #202C33;
    width: 100%;
    display: flex;
}

.sideBar__searchArea input {
    background: none;
    border: none;
    resize: none;
    outline: none;
    width: 100%;
    margin-left: 30px;
    color: #AEBAC1;
    font-weight: 100;
    font-size: 20px;
}

::placeholder {
    color: #AEBAC1;
    font-size: 20px;
    font-weight: 100;
}

.sideBar__searchIcon {
    font-size: 20px;
    color: #AEBAC1;
    cursor: pointer;
}

.sideBar_searchFilter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 5px;
    margin-left: 20px;
    cursor: pointer;
}

.sideBar__archive {
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    padding: 15px 35px;
    background-color: #111B21;
    border-bottom: 1px solid #202C33;
}

.sideBar__archiveIcons {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sideBar__archiveIcon {
    font-size: 20px;
    color: #00A884;
}

.sideBar__archive span {
    color: white;
    font-size: 25px;
    margin-left: 50px;
}

.sideBar__body {
    height: 700px;
    Overflow-y: scroll;
}

.sideBar__item {
    display: flex;
    background-color: #111B21;
    padding: 10px 15px;
    cursor: pointer;
}

.sideBar__item :hover{
    background-color: #202C33;
}

.sideBar__itemImage {
}

.sideBar__itemImage img {
    border-radius: 55px;
    width: 65px;
}

.sideBar__sender {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-left: 20px;
    border-bottom: 1px solid #202C33;
    
}

.sideBar__senderInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sideBar__senderName {
    color: white;
    font-size: 25px;
}

.sideBar__senderMessage {
    color: #AEBAC1;
    font-size: 20px;
}

.sideBar__senderMessageTime{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.sideBar__senderMessageTime span{
    color: #AEBAC1;
}


</style>