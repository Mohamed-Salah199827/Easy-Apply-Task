import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useUsersStore = defineStore('Users', () => {

  
  const Users=ref(null)

  function GetAllUsers() { 

axios.get('/users').then((response) => {
  Users.value=response.data
}).catch((err) => {
  console.log(err);
});

   }
 
  return { 
    Users,
    GetAllUsers

   }
})
