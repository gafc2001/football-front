<script setup>
  import { getCurrentInstance, reactive, ref } from 'vue';
  import * as AuthService from '@/app/auth/services/index';
import router from '@/router';
  const rules = [
    v => !!v || 'This camp is required',
  ]

  const formData = reactive({
    email : '',
    password : '',
  })

  const formRef = ref();
  

  
  const { proxy } = getCurrentInstance();

  const signIn = async() => {
    const { valid } = await formRef.value.validate()

    if (!valid) return;

    const response = await AuthService.signInService(proxy,formData.email,formData.password);
    if(response){
      router.push({path : '/'});
    }
  }
</script>
<template>
  <div class="d-flex h-100 align-center">
    <v-sheet class="mx-auto px-6 py-10" width="400" height="fit-content">

      <v-form ref="formRef">
        <v-text-field
          :rules="rules"
          v-model="formData.email"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.password"
          type="password"
          :rules="rules"
          label="Password"
          required
        ></v-text-field>

        <div class="d-flex flex-column">
          <v-btn
            class="mt-4"
            color="success"
            @click="signIn"
          >
            Sign in
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>