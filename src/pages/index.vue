<script setup>
import { reactive, ref } from 'vue';

  const rules = [
    v => !!v || 'This camp is required',
  ]

  const formData = reactive({
    email : '',
    password : '',
  })

  const formRef = ref();

  const validate = async() => {
    const { valid } = await formRef.value.validate()
    if (valid) alert('Form is valid')
  }

  const signIn = async() => {
    alert(1);
    await validate();
  }
</script>
<template>
  <div class="d-flex h-100 align-center">
    <v-sheet class="mx-auto px-6 py-10" width="400" height="fit-content">

      <v-form ref="formRef">
        <v-text-field
          :counter="10"
          :rules="rules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="formData.password"
          :counter="10"
          :rules="rules"
          label="Password"
          required
        ></v-text-field>

        <div class="d-flex flex-column">
          <v-btn
            class="mt-4"
            color="success"
            block
            @click="signIn"
          >
            Sign in
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </div>
</template>