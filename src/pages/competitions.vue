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
            </v-col>
        </v-row>
    </v-container>

</template>