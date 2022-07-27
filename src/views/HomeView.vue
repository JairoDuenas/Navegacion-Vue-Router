  <template>
  <main>
    <h3>Introduce tu nombre de usuario {{ username }}</h3>
    <input type="text" placeholder="username" v-model="username" />
    <button @click="iniciar">Iniciar sesión</button>
  </main>
</template>
  
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref();
const router = useRouter();

function iniciar() {
  router.push({ name: "about" });
}
</script>

