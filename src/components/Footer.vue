<template lang="">
<footer>
    <div class="container">
        <div class="left">
            <div class="col-1">
                <router-link class="logo" :to="{ name:'home'}">AnimeOnFire</router-link>
                <ul>
                    <li>
                        <a href=""><i class="redesocial fa-brands fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="redesocial fa-brands fa-instagram""></i></a>
                    </li>
                    <li>
                        <a href=""><i class="redesocial fa-brands fa-discord"></i></a>
                    </li>
                    <li>
                        <a href=""><i class="redesocial fa-brands fa-youtube"></i></a>
                    </li>
                </ul>
            </div>
            <div class="col-2">
                <ul>
                    <router-link class="link" :to="{ name:'home'}">Home</router-link>
                    <router-link class="link" :to="{ name:'blogs'}">Blogs</router-link>
                    <router-link v-if="user" class="link" :to="{ name:'newpost'}">Create Post</router-link>
                    <router-link v-if="!user" class="link" :to="{ name:'login'}">Login In / Register</router-link>
                </ul>
            </div>
        </div>
        <div class="right">
            <p>Copyright 2021 All rights Reserved</p>
        </div>
    </div>
</footer>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.link {
    text-decoration: none;
    color: rgb(255, 255, 255);
    margin-left: 20px;
    transition: 0.3s color ease;
}
.link:hover {
    color: red;
}
footer {
    margin-top: auto;
    padding: 100px 25px;
    background-color: #303030;
}

.logo {
    color: red;
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 32px;
}
div {
    display: flex;
    flex: 1;
}

.left{
    gap: 32px;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header{
    text-align: center;
    font-size: 24px;
    color: #fff;
    text-decoration: none;
    font-weight: 600;
}
ul {
    gap: 16px;
    list-style: none;
    display: flex;
}

.col-1 , .col-2 {
    gap: 32px;
}
.col-1 {
    flex-direction: column;
}
.col-1 h2 {
    text-align: center;
}
.col-1 ul {
    margin-top: auto;
}
.col-1 li {
    display: flex;
    align-items: center;
}

.redesocial {
    width: 24px;
    height: auto;
    color: #fff;
    transition: 0.3s ease;
}
.redesocial:hover {
    color: red;
}

.col-2 ul{
    height: 100%;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.col-2 link{
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    }
.right {
    gap: 32px;
    color: #fff;
    align-items: center;
    flex-direction: column;
}

@media (min-width: 800px){
    .left{
        flex-direction: row;
        align-items: initial;
        gap: 0;
    }
    .header{
        text-align: initial;
    }
    .container{
        flex-direction: row;
        gap: 0;
    }
    .col-2 ul{
    flex-direction: column;
    }
    .col-1 h2 {
    text-align: initial;
}

}
</style>