<template>
  <v-app>
    <v-layout>
      <AppBarMain
        :is-login-page="isLoginPage"
        :is-logged-in="isLoggedIn"
        :user-name="user?.name ?? ''"
        :role-label="roleLabel"
        @toggle-drawer="toggleDrawer"
        @logout="logout"
      />

      <NavigationDrawerLeft
        v-model="drawer"
        :is-login-page="isLoginPage"
        :menus="visibleMenus"
      />

      <v-main app class="main-container" :class="isLoginPage ? '' : 'pa-6'">
        <v-container class="main-container">
          <div class="content">
            <slot />
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
const {
  drawer,
  isLoginPage,
  user,
  isLoggedIn,
  visibleMenus,
  roleLabel,
  toggleDrawer,
  logout,
} = useAppShell();
</script>
