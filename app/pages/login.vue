<template>
  <v-container style="max-width: 520px">
    <v-card class="pa-6" rounded="xl">
      <v-card-title class="text-h6">Login test (Demo)</v-card-title>

      <v-card-text class="pt-4">
        <v-text-field v-model="name" label="Display name" />

        <v-select
          v-model="role"
          :items="[
            { title: 'Requester', value: 'requester' },
            { title: 'Approver', value: 'approver' },
            { title: 'Auditor', value: 'auditor' },
          ]"
          label="Role"
        />

        <v-btn color="primary" block class="mt-2" @click="onLogin">
          Login
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'auth' });

const auth = useAuthStore();

const name = ref('Bubble');
const role = ref<'requester' | 'approver' | 'auditor'>('requester');

function onLogin() {
  auth.login({ name: name.value, role: role.value });
  navigateTo('/dashboard');
}
</script>
