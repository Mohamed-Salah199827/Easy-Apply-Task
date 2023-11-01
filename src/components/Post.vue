
<script setup>
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";

import { usePostsStore } from "../stores/Posts";
import { useUsersStore } from "../stores/Users";
const route =useRoute()
const PostStore = usePostsStore();
const UsersStore = useUsersStore();


function getUserName(user_id) {
  let users = UsersStore.Users;
  users.forEach((user) => {
    if (user.id == user_id) {
      return username;
    }
  });
}
onBeforeMount(() => {
  
  PostStore.GetPost(route.params.id);
});
</script>


<template>
  <div  class="Post">

<div class="card mb-3">
  <img class="card-img-top" :src="'https://picsum.photos/600/300/?image=' + PostStore.Post.id" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">{{ PostStore.Post.title }}</h5>
    <p class="card-text">{{ PostStore.Post.body }}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
  <div class="d-flex mt-4 justify-content-between p-2">
              <template v-for="user in UsersStore.Users" :key="user.id">
                <template v-if="user.id == PostStore.Post.userId">
                  <h6><span>username:</span> {{ user.username }}</h6>
                  <h6><span>phone:</span> {{ user.phone }}</h6>
                </template>
              </template>
            </div>
</div>

  </div>


</template>
<style>
.Post{
  width: 50%;
  height: 100vh;
  margin: auto;
 display: flex;
 flex-direction: column;
 justify-content: center;
}
</style>