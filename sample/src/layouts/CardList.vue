<script setup lang="ts">
import Card from '../components/Card.vue';
import { ref, Ref, onMounted } from 'vue';
import { getYoutubeData } from '../api/youtube';
import { youtubeItems } from '../types/type';
import { ConsoleWriter } from 'istanbul-lib-report';

const cards: Ref<youtubeItems> = ref();
const getData = async () => {
    const res = await getYoutubeData('ベース');
    cards.value = res.items
}
onMounted(() => {
    getData()
    console.log(cards)
})

</script>

<template>
    <v-row dense>
    <v-col
        v-for="card in cards"
        :key="card.id.videoId"
        cols="5"
    >
        <Card :card="card" />
    </v-col>
    </v-row>
</template>