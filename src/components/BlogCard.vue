<template >
    <div class="blog-card">
        <div class="icons">
            <div class="icon">
                <i class="fa-solid fa-file-pen"></i>
            </div>
            <div class="icon">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        <img :src="require(`@/assets/Animes/${post.blogCoverPhoto}.jpg`)" alt="">
        <div class="info">
             <h4>{{post.blogTitle}}</h4>
             <h6>Posted on: {{post.blogDate}}</h6>
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
    }
}

</style>