<template>
  <div class="home">
    <!-- <BlogPostVue :post="post" v-for="(post,index) in sampleBlogPost" :key="index" /> -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Ver mais animes</h3>
        <div class="blog-cards">
          <BlogCardVue v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostVue from '@/components/BlogPost.vue';
import BlogCardVue from '@/components/BlogCard.vue';
export default {
  name: "Home", 
  components: {BlogPostVue, BlogCardVue},
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
        },
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
      sampleBlogCards: [
        {blogTitle: "Anime Card #1", blogCoverPhoto: "stock-1", blogDate: "November 1 , 2022"},
        {blogTitle: "Anime Card #2", blogCoverPhoto: "stock-2", blogDate: "November 1 , 2022"},
        {blogTitle: "Anime Card #3", blogCoverPhoto: "stock-3", blogDate: "November 1 , 2022"},
        {blogTitle: "Anime Card #4", blogCoverPhoto: "stock-4", blogDate: "November 1 , 2022"},
        {blogTitle: "Anime Card #5", blogCoverPhoto: "stock-5", blogDate: "November 1 , 2022"},
      ]
    }
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  min-width: 100%;
  flex-wrap: wrap;
}

@media(max-width: 1200px) {
    .home {
        min-width: 100%;
        max-width: 350px;
        flex-direction: column;
        align-items: center;
}
}
.blog-card-wrap {
  h3{
    font-weight: 300;
    font-size: 28px;
  }
}
</style>
