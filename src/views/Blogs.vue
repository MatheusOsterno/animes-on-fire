<template lang="">
<div class="blog-card-wrap">
    <div class="blog-cards container">
        <div class="toggle-edit">
            <span>toggle-edit Post</span>
            <input type="checkbox" v-model="editPost">
        </div>
            <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
    </div>
</div>
</template>
<script>
import BlogCard from "@/components/BlogCard.vue"
export default {  
    components: { BlogCard },
    name: "Blogs",
    computed: {
        sampleBlogCards () {
            return this.$store.state.sampleBlogCards;
        },
    }
}
</script>
<style lang="scss" scoped>
input{
    position: relative;
    border: none;
    background: rgb(255, 255, 255);
    outline: none;
    width: 80px;
    height: 30px;
    border-radius: 20px;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.1) ;
}
input::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 20px;
    top: 0;
    right: 0;
    background: #303030;
    transition: 750ms ease all;
    box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.1) ;
}
input:checked {
    background: #fff;
    left: 53px;
}
    
</style>