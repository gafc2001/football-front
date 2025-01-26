<script setup>
import { getAllCompetitions } from '@/app/competions/service';
import { getCurrentInstance, onMounted, ref } from 'vue';


const competitions = ref([]);

const { proxy } = getCurrentInstance();
onMounted(async () => {
    const result = await getAllCompetitions(proxy);
    competitions.value = result;
})

</script>

<template>
    <!-- {{ competitions }} -->
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