import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
       state: {
           loadedPosts: []
       },
       mutations: {
           setPosts(state,posts) {
               state.loadedPosts = posts
           }
       },
       actions: {
           async nuxtServerInit(vuexContext, context) {
              try {
                   const res = await axios.get('https://nuxtblog-4e44e-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
                   const postsArray = []
                   for (const key in res.data) {
                       postsArray.push({ ...res.data[key], id: key })
                   }
                   vuexContext.commit('setPosts', postsArray)
               } catch (e) {
                   return contenxt.error(e)
               }
           },
           setPosts(vuexContext, posts) {
               vuexContext.commit('setPosts', posts)
           }
       },
       getters: {
           loadePosts(state) {
               return state.loadedPosts
           }
       }
    })
}
export default createStore
