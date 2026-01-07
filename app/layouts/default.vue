<script setup lang="ts">
import { ref, computed } from 'vue';
import { storeToRefs } from 'pinia';

type UserRole = 'requester' | 'approver' | 'auditor';
type MenuItem = { title: string; to: string; icon: string; roles: UserRole[] };

const route = useRoute();
const drawer = ref(true);

const auth = useAuthStore();
const { user, isLoggedIn } = storeToRefs(auth);

// ถ้ายังไม่ได้แยก layout สำหรับ /login ให้ซ่อน drawer/topbar ปุ่มต่างๆ ตอนอยู่หน้า login
const isLoginPage = computed(() => route.path === '/login');

const menus: MenuItem[] = [
  {
    title: 'Dashboard',
    to: '/dashboard',
    icon: 'mdi-view-dashboard',
    roles: ['requester', 'approver', 'auditor'],
  },
  {
    title: 'Requests',
    to: '/requests',
    icon: 'mdi-file-document-outline',
    roles: ['requester', 'approver', 'auditor'],
  },
  {
    title: 'Approvals',
    to: '/approvals',
    icon: 'mdi-check-decagram',
    roles: ['approver'],
  },
  {
    title: 'Audit Log',
    to: '/audit',
    icon: 'mdi-clipboard-text-clock-outline',
    roles: ['auditor'],
  },
];

const visibleMenus = computed(() => {
  const role = user.value?.role;
  if (!role) return [];
  return menus.filter((m) => m.roles.includes(role));
});

const roleLabel = computed(() => {
  const r = user.value?.role;
  if (r === 'requester') return 'Requester';
  if (r === 'approver') return 'Approver';
  if (r === 'auditor') return 'Auditor';
  return 'Guest';
});

function onLogout() {
  auth.logout();
  navigateTo('/login');
}
</script>

<template>
  <v-app>
    <v-app-bar flat>
      <v-app-bar-nav-icon v-if="!isLoginPage" @click="drawer = !drawer" />
      <v-app-bar-title class="font-weight-medium">ExpenseFlow</v-app-bar-title>

      <v-spacer />

      <template v-if="isLoggedIn && !isLoginPage">
        <v-chip size="small" variant="tonal" class="mr-2">
          {{ user?.name }} • {{ roleLabel }}
        </v-chip>
        <v-btn variant="text" @click="onLogout">Logout</v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer v-if="!isLoginPage" v-model="drawer" app>
      <v-list nav density="comfortable">
        <v-list-item
          v-for="m in visibleMenus"
          :key="m.to"
          :to="m.to"
          :prepend-icon="m.icon"
          :title="m.title"
          rounded="lg"
        />
      </v-list>
    </v-navigation-drawer>

    <v-main :class="isLoginPage ? '' : 'pa-6'">
      <slot />
    </v-main>
  </v-app>
</template>
