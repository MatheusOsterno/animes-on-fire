<template>
  <div class="home">
    <BlogPostVue :post="post" v-for="(post,index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPostVue from '@/components/BlogPost.vue';
export default {
  name: "Home", 
  components: {BlogPostVue},
  data() {
    return {
      sampleBlogPost: [
        {
          title: "this is a Filter Title!",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "chainsaw",
        },
        {
          title: "this is a Filter Title!",
          blogHTML: "This is a filler blog post title2",
          blogCoverPhoto: "naruto",
        }
      ],
    }
  },
};
</script>
