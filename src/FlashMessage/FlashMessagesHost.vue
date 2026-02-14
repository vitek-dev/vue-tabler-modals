<script setup lang="ts">
import { computed } from 'vue'
import { useFlashMessagesStore } from './flashMessagesStore'
import FlashMessageToast from './FlashMessageToast.vue'

const messages = computed(() => useFlashMessagesStore().flashMessages)
</script>

<template>
  <div class="toast-container">
    <FlashMessageToast
      v-for="index of Object.keys(messages)"
      :key="index"
      :index="parseInt(index)"
    />
  </div>
</template>

<style scoped>
.toast-container {
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 0 0 1.5rem 1.5rem;
  z-index: 2000;
}

.toast-container:deep(.toast) {
  opacity: 0.55;
}

.toast-container:deep(.toast):last-child {
  opacity: 1;
}
</style>
