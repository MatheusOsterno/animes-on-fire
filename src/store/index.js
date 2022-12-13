import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Anime Card #1", blogCoverPhoto: "desenho", blogDate: "November 1 , 2022" },
      { blogTitle: "Anime Card #2", blogCoverPhoto: "animegirl", blogDate: "November 1 , 2022" },
      { blogTitle: "Anime Card #3", blogCoverPhoto: "olhosazuis", blogDate: "November 1 , 2022" },
      { blogTitle: "Anime Card #4", blogCoverPhoto: "stock-4", blogDate: "November 1 , 2022" },
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, playload) {
      state.editPost = playload;
    }
  },
  actions: {
  },
  modules: {
  }
})
