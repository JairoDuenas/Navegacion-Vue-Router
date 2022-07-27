import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    //{ path: "/home", redirect: { name: "home" } },
    {
      path: "/",
      name: "home",
      component: HomeView,
      alias: ["/home"],
      meta: { requiresAuth: false },
    },
    {
      path: "/session",
      component: () => import("../views/SessionView.vue"),
      children: [
        {
          path: "",
          components: {
            default: () => import("../views/LoginView.vue"),
            register: () => import("../views/RegisterView.vue"),
          },
        },
      ],
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/chats",
      component: () => import("../views/ChatsView.vue"),
      meta: { requiresAuth: true, roles: ["admin"] },
      children: [
        {
          path: ":chatId",
          component: () => import("../views/ChatView.vue"),
          props: (route) => {
            return {
              chatId: route.params.chatId,
            };
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from) => {
  console.log(to, from);

  if (to.meta?.requiresAuth && to.meta.roles.includes("admin")) {
    console.log(to.path, "requiresAuth");
    return "session";
  }

  if (to.path === "/") return { name: "about" };
  return true;
});

export default router;
