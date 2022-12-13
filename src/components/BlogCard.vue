<template >
    <div class="blog-card">
        <div  v-show="editPost" class="icons">
            <div  class="icon">
                <i class="edit fa-solid fa-file-pen"></i>
            </div>
            <div class="icon">
                <i class="delete fa-solid fa-trash"></i>
            </div>
        </div>
        <img :src="require(`@/assets/Animes/${post.blogCoverPhoto}.jpg`)" alt="">
        <div class="info">
             <h4>{{post.blogTitle}}</h4>
             <h6>Posted on:{{post.blogDate}}</h6>
             <router-link class="link" to="#">
                Assista agora.<i class="fa-solid fa-arrow-right"></i>
             </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: "BlogCardVue",
    props: ["post"],
    computed: {
        editPost() {
            return this.$store.state.editPost
        }
    },
}
</script>
<style lang="scss">
.blog-card {
    position: relative;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: #fff;
    min-height: 420px;
    transition: .5s ease all;

    &:hover {
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.1) ;
    }
    .icons {
        display: flex;
        position: absolute;
        top: 10px;
        right: 10px;
        z-index: 99;
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            margin-left: 10px;
            width: 35px;
            height: 35px;
            border-radius: 50%;
            background-color: #fff;
            transition: .5s ease all;

            &:hover {
            background-color: rgb(0, 0, 0);
            color: #fff;  
            }
            &:nth-child(1) {
                margin-right: 8px;
            }
            .edit, .delete {
                pointer-events: none;
                height: 15px;
                width: auto;
            }
        }
    }

    img {
        display: block;
        border-radius: 8px 8px 0 0;
        z-index: 1;
        width: 100%;
        height:300px;
        min-height: 200px;
        object-fit: cover;
    }
    .info{
        display: flex;
        flex-direction: column;  
        z-index: 3px;
        padding: 32px 16px;
        color: #000;

        h4 {
            padding-bottom: 0px;
            font-size: 20px;
            font-weight: 300;
        }

        h6 {
            font-weight: 400;
            font-size: 12px;
            padding-bottom: 16px;

        }

        .link {
            display: inline-flex;
            align-items: center;
            margin-top: auto;
            font-weight: 500;
            padding-top: 20px;
            font-size: 12px;
            padding-bottom: 4px;
            transition: .5 ease-in all;

            &:hover {
                color: rgba(48,48,48,0.8) ;
            }
        }
    }
}

</style>