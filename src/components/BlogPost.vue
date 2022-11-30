<template lang="">
    <div class="blog-wrapper">
        <div class="blog-content">
            <h2>{{post.title}}</h2>
            <p>{{post.blogHTML}}</p>
            <p>{{post.blogCoverPhoto}}</p>
        </div>
        <div class="bloh-photo">
            <img :src="require(`../assets/Blog/${post.blogCoverPhoto}.jpg`)" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name: 'BlogPost',
    props: ["post"]
}
</script>
<style lang="">
    
</style>