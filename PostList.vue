<template>
  <section>
  <div class="uk-child-width-expand@s uk-text-center" uk-grid>
  <PostPreview
  v-for="post in posts"
  :key="post.id"
  :id="post.id"
  :is-admin="isAdmin"
  :thumbnail="post.thumbnail" 
  :title="post.title"
  :previewText="post.previewText"/>
</div>
</section>   
</template>

<script>
export default {
  name: "PostList",
  props:  {
    isAdmin: {
      type: Boolean,
      required: false
  },
  posts: {
    type: Array,
    required: true
  }
  },
    data () {
    return {
       loadedPosts: [
         { id: "1", 
         title: "A First Post", 
         previewText: "Lorem Ipsum Lorem Ipsum", 
         thumbnail: "https://picsum.photos/500/320" 
         },
         { id: "2", 
         title: "A Second Post", 
         previewText: "Lorem Ipsum Lorem Ipsum", 
         thumbnail: "https://picsum.photos/500/320" 
         },
         { id: "3", 
         title: "A third Post", 
         previewText: "Lorem Ipsum Lorem Ipsum", 
         thumbnail: "https://picsum.photos/500/320" 
         }
       ]
    }
  }
}
</script>