<script>
export default {
  data() {
    return {
      username: "",
    };
  },
};
</script>

<template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username" />
  </main>
</template>
