import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('Posts', () => {

  
  const Posts=ref([])
const Post = ref(null) 
  function GetAllPosts() { 

axios.get('/posts').then((response) => {
  let data=response.data

  const pages = 12;
  
  const Pagination = [];
  for (let i = 0; i < data.length; i += pages) {
    Pagination.push(data.slice(i, i + pages));
  }
  

  Posts.value=Pagination
}).catch((err) => {
  console.log(err);
});

   }
   async function GetPost(id) { 

    await axios.get(`/posts/${id}`).then((response) => {
      Post.value=response.data
    }).catch((err) => {
      console.log(err);
    });
    
       }
  return { 
    Posts,
    GetAllPosts,
    GetPost,
    Post

   }
})
