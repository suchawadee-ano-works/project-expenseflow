import { defineStore } from "pinia"

export type UserRole = "requester" | "approver" | "auditor"
export type DemoUser = { name: string; role: UserRole }

const COOKIE_KEY = "expenseflow_demo_user"

export const useAuthStore = defineStore("auth", () => {
  // cookie ใช้ได้ทั้ง server/client
  const userCookie = useCookie<DemoUser | null>(COOKIE_KEY, {
    sameSite: "lax",
  })

  const user = ref<DemoUser | null>(userCookie.value ?? null)
  const isLoggedIn = computed(() => !!user.value)

  function login(payload: DemoUser) {
    user.value = payload
    userCookie.value = payload
  }

  function logout() {
    user.value = null
    userCookie.value = null
  }

  return { user, isLoggedIn, login, logout }
})
