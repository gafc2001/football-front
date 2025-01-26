<script setup>
defineProps({
    competition : Object
})
</script>

<template>
    <div class="bg-white h-100 px-4 py-5">
        <span class="d-block">Area: {{ competition.area }}</span>
        <span class="d-block">Competition: {{ competition.name }}</span>
        <span class="d-block">Type : {{ competition.type }}</span>
        <span class="d-block">Plan : {{ competition.plan }}</span>
        <v-img
            class="mt-10"
            :height="150"
            :src="competition.emblem"
        ></v-img>
    </div>
</template>