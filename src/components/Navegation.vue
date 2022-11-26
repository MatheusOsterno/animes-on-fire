<template>
    <header>
        <nav class="container">
            <div class="branding">
                <router-link  class="logo" :to="{ name: 'Home' }">AnimeOnFire </router-link>
            </div>
            <div class="nav-links">
                <ul v-show="!mobile" >
                    <router-link class="link" to="#">Home</router-link>
                    <router-link class="link" to="#">Blogs</router-link>
                    <router-link class="link" to="#">Create Post</router-link>
                    <router-link class="link" to="#">Login/Register</router-link>
                </ul>
            </div>
        </nav>
        <ul v-show="mobile" @click="toggleMobileNav">
        <i  class="menu-icon fa-solid fa-bars"></i>
        </ul>
        <transition name="mobile-nav">
            <ul class="mobile-nav" v-show="mobileNav">
                <router-link class="linkMobile" to="#">Home</router-link>
                <router-link class="linkMobile" to="#">Blogs</router-link>
                <router-link class="linkMobile" to="#">Create Post</router-link>
                <router-link class="linkMobile" to="#">Login/Register</router-link>
            </ul>
        </transition>
    </header>
</template>
<script>
import menuIcon from '../assets/Icons/bars-regular.svg';

export default {
    name: 'navigation',
    components: {
        menuIcon,
    },
    data() {
        return {
            mobile:false,
            mobileNav:false,
            windownWidth:null,
        };
    },
    created() {
        window.addEventListener('resize', this.checkScreen);
        this.checkScreen();
    },
    methods: {
        checkScreen() {
            this.windownWidth = window.innerWidth;
            if (this.windownWidth <= 750){
                this.mobile = true;
                return
            }
            this.mobile = false;
            this.mobileNav = false;
                return;
        },
        toggleMobileNav() {
            this.mobileNav = !this.mobileNav;
        }
    }
}

</script>
<style scoped>
header {
    background-color: #fff;
    padding: 0 25px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index: 99;
}
.branding {
        display: flex;
        align-items: center;
    }

.logo {
    color: red;
    font-weight: 600;
    font-size: 24px;
    text-decoration: none;
}
nav {
    display: flex;
    align-items: center;
    padding: 25px 0;
}

.nav-links {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    flex: 1;
    color: black;
    font-weight: bold;
    font-size: 20px;
    padding: 0 8px;
    text-decoration: none;
}
.link {
    text-decoration: none;
    color: black;
    margin-left: 20px;
    transition: 0.3s color ease;
}
.link:hover {
    color: red;
}

ul {
    margin-right: 32px;
}

.menu-icon {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 25px;
    width: auto;
}
.mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background-color: #303030;
    top: 0;
    left: 0;
}
.linkMobile{
    font-size: 22px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    align-items: center;
    color: rgb(255, 255, 255);
    margin-left: 20px;
    font-weight: 600;
    margin-top: 20px;
    transition: 0.3s color ease;
}
.linkMobile:hover {
    color: red;
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: all .7s ease;
}

.mobile-nav-enter {
    transform: translate(-250px);
}

.mobile-nav-enter-to {
    transform: translate(0);
}
.mobile-nav-leave-to {
    transform: translateX(-250px);
}

</style>