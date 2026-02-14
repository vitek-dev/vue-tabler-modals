<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { IconAlertTriangle, IconCheck, IconInfoCircle, IconAlertCircle } from '@tabler/icons-vue'
import { useAlertModalStore } from './alertModalStore'
import { computed } from 'vue'

defineProps({
  defaultMessages: {
    type: Object as () => {
      title: string
      description: string
      confirmLabel: string
    },
    required: true,
  },
})

const store = useAlertModalStore()
const { visible, options } = storeToRefs(store)

const alertType = computed(() => options.value.type ?? 'info')

const statusClass = computed(() => {
  const types = {
    info: 'bg-info',
    success: 'bg-success',
    warning: 'bg-warning',
    danger: 'bg-danger',
  }
  return types[alertType.value]
})

const iconComponent = computed(() => {
  const icons = {
    info: IconInfoCircle,
    success: IconCheck,
    warning: IconAlertCircle,
    danger: IconAlertTriangle,
  }
  return icons[alertType.value]
})

const textClass = computed(() => {
  const classes = {
    info: 'text-info',
    success: 'text-success',
    warning: 'text-warning',
    danger: 'text-danger',
  }
  return classes[alertType.value]
})
</script>

<template>
  <Teleport to="body">
    <div v-if="visible">
      <div class="modal modal-blur show d-block" @click.self="store.close()">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <button class="btn-close" @click="store.close()" />

            <div class="modal-status" :class="statusClass" />

            <div class="modal-body text-center py-4">
              <component :is="iconComponent" :size="48" class="mb-2" :class="textClass" />
              <h3>{{ options.title || defaultMessages.title }}</h3>
              <div class="text-secondary">
                {{ options.description || '' }}
              </div>
            </div>

            <div class="modal-footer">
              <div class="w-100">
                <button class="btn w-100" @click="store.close()">
                  {{ options.confirmLabel || defaultMessages.confirmLabel }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show" />
    </div>
  </Teleport>
</template>
