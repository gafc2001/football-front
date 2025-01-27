<script setup>
import ItemTeam from '@/app/teams/components/ItemTeam.vue';
import { getAllTeams } from '@/app/teams/service';
import { getCurrentInstance, onMounted, ref } from 'vue';


const teams = ref([]);

const { proxy } = getCurrentInstance();
onMounted(async () => {
    const result = await getAllTeams(proxy);
    teams.value = result;
})

</script>

<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="team in teams"
                :key="team.id"
                cols="12"
                sm="3"
            >
                <ItemTeam :team="team"/>
            </v-col>
        </v-row>
    </v-container>

</template>