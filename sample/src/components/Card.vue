<script setup lang="ts">
import { youtubeItems } from '../types/type'

defineProps<{ card: youtubeItems }>()

console.log('test')
</script>

<template>
    <v-card>
        <v-img
            :src="card.snippet.thumbnails.high.url" 
            class="align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            :height="card.snippet.thumbnails.high.height"
            :width="card.snippet.thumbnails.high.width"
            cover
        >
            <v-card-title class="text-white" v-text="card.snippet.title"></v-card-title>
        </v-img>
    </v-card>
</template>