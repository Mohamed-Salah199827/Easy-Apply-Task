<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { usePostsStore } from "./stores/Posts";
const Posts=usePostsStore()
Posts.GetAllPosts()

</script>

<template>

</template>
<style></style>
