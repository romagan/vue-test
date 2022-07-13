<template>
  <div class="container">
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: `Layout`,

  components: {},

  data() {
    return {}
  },

  computed: {},

  // mounted() {},
  
  methods: {},
})
</script>
