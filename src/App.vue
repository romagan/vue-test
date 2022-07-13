<template>
  <c-layout>
    <c-main />
  </c-layout>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

import CLayout from '@/components/Layout.vue'
import CMain from '@/components/Main.vue'

export default defineComponent({
  name: 'App',
  components: {
    CLayout,
    CMain,
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

details {
  text-align: left;
}

summary {
  padding: 1rem;
  margin-bottom: 0.5rem;

  font-weight: 600;

  background-color: paleturquoise;
}
</style>
