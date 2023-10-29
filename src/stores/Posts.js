import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const usePostsStore = defineStore('Posts', () => {

  
  const Posts=ref({})

  function GetAllPosts() { 
axios.get('/user/12345').then((response) => {
  console.log(response);
}).catch((err) => {
  console.log(err);
});

   }
 
  return { 
    Posts,
    GetAllPosts

   }
})
