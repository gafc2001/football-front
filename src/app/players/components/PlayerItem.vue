<script setup>
defineProps({
    player : Object,
    crest : String
})
</script>

<template>
    <v-sheet class="mx-2 my-2 bg-white player-item text-center player-container">
        <img v-if="crest" :src="crest" width="30" class="crest-img"/>
        <span class="text-body-2 d-block">{{ player.name }}</span>
        <span class="text-caption d-block">{{ player.nationality }}</span>
        <span class="text-caption d-block">{{ player.position }}</span>
        <v-icon icon="mdi-tshirt-crew" size="130"></v-icon>
    </v-sheet>
</template>

<style>
    .player-container{
        position: relative;
    }
    .crest-img{
        position: absolute;
        bottom: 5px;
        right: 5px;
    }
</style>