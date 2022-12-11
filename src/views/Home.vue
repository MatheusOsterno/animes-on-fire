<template>
  <div class="home">
    <CheckBox />
    <!-- <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index" /> -->
    <div class="blog-card-wrap">
      <div class="container">
        <h3>Ver mais animes</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Registre-se agora mesmo, e de graça!</h2>
        <router-link class="rounter-button" to="#">
          Registrar em Animes On
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '@/components/BlogPost.vue';
import BlogCard from '@/components/BlogCard.vue';
export default {
  name: "Home",
  components: { BlogPost, BlogCard },
  computed: {
        sampleBlogCards () {
            return this.$store.state.sampleBlogCards;
        },
    },
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
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width:800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .rounter-button {
      display: flex;
      background-color: rgba(98, 0, 255, 0.411);
      border-radius: 20px;
      font-size: 24px;
      text-decoration: none;
      padding: 40px;
      transition: .5s ease all;
      &:hover {
        transform: rotateZ(-1deg) scale(1.01);
        box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.1) ;
      }
      @media(min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;

      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}
</style>
