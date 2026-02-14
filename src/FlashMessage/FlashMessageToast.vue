<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import { type FlashMessageItem, useFlashMessagesStore } from './flashMessagesStore'
import { IconCheck, IconX, IconInfoCircle } from '@tabler/icons-vue'

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
})

const message = useFlashMessagesStore().flashMessages[props.index] as FlashMessageItem
const visible: Ref<boolean> = ref(false)

const close = () => {
  visible.value = false

  window.setTimeout(() => useFlashMessagesStore().remove(props.index), 250)
}

onMounted(() => {
  window.setTimeout(close, 6500)
  visible.value = true
})
</script>

<template>
  <transition name="slide">
    <div v-if="visible" :class="`toast show ${message.type}`">
      <div class="toast-header">
        <IconCheck v-if="message.type === 'toast-success'" class="text-success" />
        <IconX v-else-if="message.type === 'toast-error'" class="text-danger" />
        <IconInfoCircle v-else class="text-info" />

        <strong class="ms-2 me-auto">{{ message.title }}</strong>
        <small>{{
          `${message.created.getHours()}:${message.created.getMinutes().toString().padStart(2, '0')}`
        }}</small>
        <button class="ms-2 btn-close" @click="close" />
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="toast-body text-body" v-html="message.text" />
    </div>
  </transition>
</template>

<style scoped>
.toast {
  border-left-width: 6px;
}

.toast-success {
  border-left-color: var(--tblr-success);
}

.toast-error {
  border-left-color: var(--tblr-danger);
}

.toast-info {
  border-left-color: var(--tblr-info);
}

/* Show/hide animation */
.toast {
  transform: translateX(0%);
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-125%);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease-out;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}

/* Time remaining animation */
@keyframes flashRemainingTime {
  from {
    width: 100%;
  }

  to {
    width: 0%;
  }
}

.toast:after {
  content: '';

  display: block;
  background: var(--tblr-gray-400);
  height: 4px;
  width: 0;

  animation-name: flashRemainingTime;
  animation-duration: 6500ms;
  animation-timing-function: linear;
}
</style>
