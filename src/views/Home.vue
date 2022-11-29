<template>
  <div class="home">

  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        welcomeScreen:true,
        photo:"Coding",
      },
      sampleBlogPost: [
        {
          title: "this is a Filter Title!",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "beatiful-stories",
        },
        {
          title: "this is a Filter Title!",
          blogHTML: "This is a filler blog post title",
          blogCoverPhoto: "designed-for-everyone",
        }
      ],
    }
  },
};
</script>
