import { useAuthStore } from "~/stores/auth"

export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuthStore()

  if (to.path === "/login") return
  if (!auth.isLoggedIn) return navigateTo("/login")
})
