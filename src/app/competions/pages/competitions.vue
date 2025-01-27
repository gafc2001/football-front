<script setup>
import { getAllCompetitions } from '@/app/competions/service';
import { getCurrentInstance, onMounted, ref } from 'vue';
import ItemCompetition from '../components/ItemCompetition.vue';


const competitions = ref([]);

const { proxy } = getCurrentInstance();
onMounted(async () => {
    const result = await getAllCompetitions(proxy);
    console.log({result});
    competitions.value = result;
})

</script>

<template>
    <v-container>
        <v-row>
            <v-col 
                v-for="competition in competitions"
                :key="competition.id"
                cols="12"
                sm="3"
            >
                <ItemCompetition :competition="competition"/>
            </v-col>
        </v-row>
    </v-container>

</template>