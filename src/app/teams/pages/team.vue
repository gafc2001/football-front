<script setup>
import PlayerItem from '@/app/players/components/PlayerItem.vue';
import { getTeamById } from '@/app/teams/service';
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


const team = ref({});

const { proxy } = getCurrentInstance();

const route = useRoute();
onMounted(async () => {
    const result = await getTeamById(proxy,route.params.id);
    team.value = result;
})

</script>

<template>
    <v-container v-if="!!team.id"> 
        <h1>{{ team.name }}</h1>
        <a target="_blank" :href="team.website">Website</a>
        <v-row>
            <v-col>
                <div>
                    <span class="py-3 px-3 bg-white d-inline-block">
                        <img
                            :src="team.crest"
                            height="200"
                            width="200"
                        >
                        </img>
                    </span>
                </div>
                <div>
                    <h2 class="d-block text-xs"><span class="font-weight-bold">Coach:</span> {{ team.coach.name }}, {{ team.coach.nationality }}</h2>
                </div>
            </v-col>
            <v-col>
                <div>
                    Current competitions
                    <div class="d-flex flex-wrap ga-3">
                        <template v-for="competition in team.runningCompetitions">
                            <div v-if="!!competition.emblem" class="bg-white competition-item">
                                <v-img
                                    :src="competition.emblem"
                                    height="100"
                                >
                                </v-img>
                            </div>
                        </template>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
        <div>
            <h3>Players</h3>
            <v-container>
                <v-row >
                    <v-col cols="12" sm="2" v-for="player in team.squad">
                        <PlayerItem :player="player"/>
                    </v-col>
                </v-row>
            </v-container>
        </div>

    </v-container>

</template>

<style>
    .competition-item{
        width: 150px;
        padding: 1rem;
    }
    .player-item{
        height: 200px;
    }
</style>