<template>
  <v-navigation-drawer
    v-if="!isLoginPage"
    app
    :model-value="modelValue"
    @update:model-value="(v) => emit('update:modelValue', v)"
  >
    <v-list nav density="comfortable">
      <v-list-item
        v-for="m in menus"
        :key="m.to"
        :to="m.to"
        :prepend-icon="m.icon"
        :title="m.title"
        rounded="lg"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import type { MenuItem } from '~/composables/useAppShell';

defineProps<{
  isLoginPage: boolean;
  modelValue: boolean;
  menus: MenuItem[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();
</script>
