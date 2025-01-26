<script setup>
defineProps({
    team : Object
})
</script>

<template>
    <div class="bg-white h-100 px-4 py-5">
        <span class="d-block text-center">Team{{ team.name }}</span>
        <v-img
            class="mt-10"
            :height="150"
            :src="team.crest"
        ></v-img>
    </div>
</template>