<script setup>
import { onBeforeMount, ref } from "vue";
import { usePostsStore } from "../stores/Posts";
import { useUsersStore } from "../stores/Users";
import Card from '../components/Card.vue';

const PostsStore = usePostsStore();
const UsersStore =useUsersStore()
const currentPage = ref(0);


function handlePagination(page) {
  let items = document.querySelectorAll(".page-item");
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    item.classList.remove("active");
    if (i == page) {
      item.classList.add("active");
    }
  }

  currentPage.value = page;
}

function getUserName(user_id){
   let users= UsersStore.Users
   console.log(users);
   users.forEach(user => {
    if (user.id==user_id) {
        return username
    }
    
   });
}

onBeforeMount(() => {
  PostsStore.GetAllPosts();
  UsersStore.GetAllUsers();
  getUserName()
});
</script>

<template>
    <Card/>
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <template v-for="post in PostsStore.Posts[currentPage]" :key="post.id">
    <div v-if="'https://picsum.photos/600/300/?image='+ post.id!=null"  class="col mb-3">
      <div class="card">
        <img
          :src="'https://picsum.photos/600/300/?image=' + post.id"
          class="card-img-top"
          :alt="post.title"
        />
        <div class="card-body">
          <h5 class="card-title">{{ post.title.substring(0,20) }}</h5>
          <p class="card-text">{{ post.body.substring(0,80) }}</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button>          <div class="d-flex mt-4 justify-content-between">
            <template v-for="user in UsersStore.Users" :key="user.id">
                <template v-if="user.id==post.userId">
            <h6><span>username:</span> {{ user.username }}</h6>
            <h6><span>phone:</span> {{ user.phone }}</h6>
                </template>
            </template>
          </div>
        </div>
      </div>
    </div>
</template>
  </div>
  <nav class="d-flex justify-content-center" aria-label="...">
    <ul class="pagination pagination-lg">
      <template v-for="(post, index) in PostsStore.Posts" :key="index">
        <li v-if="index == 0" class="page-item active" aria-current="page">
          <span class="page-link">{{ index + 1 }}</span>
        </li>
        <li v-else class="page-item">
          <span class="page-link" @click="handlePagination(index)">{{ index + 1 }}</span>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style>
h6 span {
    color: rgba(99, 98, 98, 0.555);
}

</style>
