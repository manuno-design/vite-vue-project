<script setup lang="ts">
import CardList from '../layouts/CardList.vue'
import AppBar from '../components/AppBar.vue'
</script>

<template>
  <v-app>
    <AppBar title="Youtube Search" color="red" />
    <v-main>
      <CardList />
    </v-main>
</v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
