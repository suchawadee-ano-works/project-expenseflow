import { computed, ref } from "vue"
import { storeToRefs } from "pinia"
import { useAuthStore } from "~/stores/auth"

export type UserRole = "requester" | "approver" | "auditor"

export type MenuItem = {
  title: string
  to: string
  icon: string
  roles: UserRole[]
}

export function useAppShell() {
  const route = useRoute()
  const drawer = ref(true)

  const auth = useAuthStore()
  const { user, isLoggedIn } = storeToRefs(auth)

  const isLoginPage = computed(() => route.path === "/login")

  const menus: MenuItem[] = [
    { title: "Dashboard", to: "/dashboard", icon: "mdi-view-dashboard", roles: ["requester", "approver", "auditor"] },
    { title: "Requests", to: "/requests", icon: "mdi-file-document-outline", roles: ["requester", "approver", "auditor"] },
    { title: "Approvals", to: "/approvals", icon: "mdi-check-decagram", roles: ["approver"] },
    { title: "Audit Log", to: "/audit", icon: "mdi-clipboard-text-clock-outline", roles: ["auditor"] },
  ]

  const visibleMenus = computed(() => {
    const role = user.value?.role
    if (!role) return []
    return menus.filter((m) => m.roles.includes(role))
  })

  const roleLabel = computed(() => {
    const r = user.value?.role
    if (r === "requester") return "Requester"
    if (r === "approver") return "Approver"
    if (r === "auditor") return "Auditor"
    return "Guest"
  })

  function toggleDrawer() {
    drawer.value = !drawer.value
  }

  function logout() {
    auth.logout()
    navigateTo("/login")
  }

  return {
    // state
    drawer,

    // auth state
    user,
    isLoggedIn,

    // computed
    isLoginPage,
    visibleMenus,
    roleLabel,

    // actions
    toggleDrawer,
    logout,
  }
}
