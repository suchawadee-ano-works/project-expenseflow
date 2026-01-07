<template>
  <v-app-bar app flat>
    <v-app-bar-nav-icon v-if="!isLoginPage" @click="emit('toggle-drawer')" />
    <v-app-bar-title class="font-weight-medium">ExpenseFlow</v-app-bar-title>

    <v-spacer />

    <template v-if="isLoggedIn && !isLoginPage">
      <v-chip size="small" variant="tonal" class="mr-2">
        {{ userName }} • {{ roleLabel }}
      </v-chip>
      <v-btn variant="text" @click="emit('logout')">Logout</v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
defineProps({
  isLoginPage: { type: Boolean, default: false },
  isLoggedIn: { type: Boolean, default: false },
  userName: { type: String, default: '' },
  roleLabel: { type: String, default: '' },
});

const emit = defineEmits<{
  (e: 'toggle-drawer'): void;
  (e: 'logout'): void;
}>();
</script>
