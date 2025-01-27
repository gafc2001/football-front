<script setup>
import router from '@/router';
import { logoutService } from '../services';


const logout = async() => {
    logoutService();
    router.push({ name : 'login'});
}

</script>

<template>
    <v-navigation-drawer>
        <v-list>
            <v-list-item
                title="Football"
            ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list nav>
            <v-list-item link :to="'/competitions'"prepend-icon="mdi-soccer-field" title="Competitions" value="competitions"></v-list-item>
            <v-list-item link :to="'/teams'"prepend-icon="mdi-account-multiple" title="Teams" value="teams"></v-list-item>
            <v-list-item link :to="'/players'"prepend-icon="mdi-account" title="Players" value="players"></v-list-item>
            <v-list-item link :to="'/favorites'"prepend-icon="mdi-star" title="Favorites" value="Favorites"></v-list-item>
        </v-list>

        <div class="pa-2">
            <v-btn block color="orange" @click="logout">
                Logout
            </v-btn>
        </div>
    </v-navigation-drawer>
</template>