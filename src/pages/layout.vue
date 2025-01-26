<script setup lang="ts">
import Sidebar from '@/app/auth/components/sidebar.vue';

</script>

<template>
  <v-card>
    <v-layout>
          <Sidebar/>
          <v-main style="min-height: 100vh">
            <div class="px-10 py-10">
                <router-view />
            </div>
          </v-main>
      </v-layout>
  </v-card>
</template>