<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h3>View more recent posts</h3>
          <div class="blog-cards">
            <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
          </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" :to="{name: 'Register'}">Register for Fireblogs <b-icon icon="arrow-right-circle-fill" class="arrow arrow-light" scale="1"></b-icon>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'

export default {
  name: 'HomeView',
  components: {
    BlogPost,
    BlogCard
},
  data(){
    return {
      welcomeScreen: {
          title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
       { title: "This is a filter title",
        blogHTML: "This is a filter blog post-stories",
        blogCoverPhoto: "beautiful-stories"},
        { title: "This is a filter title 2",
        blogHTML: "This is a filter blog post-stories",
        blogCoverPhoto: "designed-for-everyone"},
      ]
    }
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards
    },
    user() {
        return this.$store.state.user;
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3{
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
    @media (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
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
.arrow {
  margin-top: 4px;
}

</style>

