<script setup>
import { onBeforeMount, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";

import { usePostsStore } from "../stores/Posts";
import { useUsersStore } from "../stores/Users";

const PostsStore = usePostsStore();
const UsersStore = useUsersStore();
const showPost=ref(false);
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


onBeforeMount(() => {
  PostsStore.GetAllPosts();
  UsersStore.GetAllUsers();
});
</script>

<template>
  <Card  :post="Post" />
  <div class="row row-cols-1 row-cols-md-3 g-4">
    <template v-for="post in PostsStore.Posts[currentPage]" :key="post.id">
      <div
        class="col mb-3"
      >
        <div class="card">
          <img
            :src="'https://picsum.photos/600/300/?image=' + post.id"
            class="card-img-top"
            :alt="post.title"
          />
          <div class="card-body">
            <h5 class="card-title">{{ post.title.substring(0, 20) }}</h5>
            <p class="card-text">{{ post.body.substring(0, 80) }}</p>
            <RouterLink
              class="btn btn-primary"
              :to="'/post/'+post.id"

            >
              show post
            </RouterLink>
            <div class="d-flex mt-4 justify-content-between p-2">
              <template v-for="user in UsersStore.Users" :key="user.id">
                <template v-if="user.id == post.userId">
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
