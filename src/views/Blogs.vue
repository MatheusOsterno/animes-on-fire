<template lang="">
<div class="blog-card-wrap">
    <div class="blog-cards container">
        <div class="toggle-edit">
            <span>Função editor</span>
            <input type="checkbox" v-model="editPost">
 
        </div>
            <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
    </div>
</div>
</template>
<script>

import BlogCard from "@/components/BlogCard.vue"

export default {  
    name: "Blogs",
    components: { BlogCard},
    computed: {
        sampleBlogCards () {
            return this.$store.state.sampleBlogCards;
        },
        editPost: {
            get() {
                return this.$store.state.editPost 
            },
            set(playload) {
                this.$store.commit("toggleEditPost", playload);
            }
        }
    },
}
</script>
<style lang="scss" >
.blog-cards{
    position: relative;

    .toggle-edit {
        display: flex;
        align-items: center;
        position: absolute;
        top: -70px;
        right: 0;
    }
    span {
        margin-right: 14px;
    }
}

input{
    position: relative;
    background: rgb(255, 255, 255);
    width: 80px;
    height: 30px;
    border-radius: 20px;
}

    
</style>