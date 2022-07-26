<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    iniciar() {
      this.$router.push({
        path: "/chats",
        query: {
          variable1: 1,
        },
      });
    },
  },
};
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username" />
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
