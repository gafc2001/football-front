<script setup>
import { computed, getCurrentInstance, onMounted, ref } from 'vue';
import { getAllPlayers } from '../service';
import PlayerItem from '../components/PlayerItem.vue';


const players = ref([]);
const tab = ref(null);
const { proxy } = getCurrentInstance();
onMounted(async () => {
    const result = await getAllPlayers(proxy);
    players.value = result;
    tab.value = result[0]?.team_id || null
})

const tabs = computed(() => {
    return players.value.map( p => ({id : p.team_id, name : p.team}))
})

</script>

<template>
    <v-container>
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" color="deep-purple-accent-4">
                <v-tab v-for="tab in tabs" :value="tab.id">{{ tab.name }}</v-tab>
            </v-tabs>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item v-for="teamPlayers in players" :key="teamPlayers.team_id" :value="teamPlayers.team_id">
                    <v-container fluid>
                        <v-row>
                            <v-col cols="12" sm="2" v-for="player in teamPlayers.players">
                                <PlayerItem :player="player" :crest="teamPlayers.team_crest"/>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card>
    </v-container>

</template>