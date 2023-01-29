<script setup lang="ts">

defineProps<{ title: string, color: string }>()
</script>

<template>
    <v-app-bar :color="color">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-app-bar-title>{{ title }}</v-app-bar-title>
    </v-app-bar>
</template>