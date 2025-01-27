<script setup>
defineProps({
    player : Object,
})
</script>

<template>
    <v-sheet class="mx-2 my-2 bg-white player-item text-center">
        <span class="d-block">{{ player.name }}, {{ player.nationality }}</span>
        <span class="d-block">{{ player.position }}</span>
        <v-icon icon="mdi-tshirt-crew" size="150"></v-icon>
    </v-sheet>
</template>