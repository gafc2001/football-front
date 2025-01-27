<script setup>
import router from '@/router';

const {team} = defineProps({
    team : Object
})

const unknowFlag = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvlj8xfcd_qYvBd5TiYyjo9TAT2skXYphHpZegkcTU_o0L29M710Z63fx4P68rkQLgvM";

const imageFlag = team.crest === null ? unknowFlag : team.crest;

const goToTeam = () => {
    router.push({name : 'team_detail', params : { id : team.id}})
}
</script>

<template>
    <div class="bg-white h-100 px-4 py-5 cursor-pointer" @click="goToTeam">
        <span class="d-block text-center">Team{{ team.name }}</span>
        <v-img
            class="mt-10"
            :height="150"
            :src="imageFlag"
        ></v-img>
    </div>
</template>