<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { IconAlertTriangle } from '@tabler/icons-vue'
import { DefaultMessages, useConfirmModalStore } from './confirmModalStore.ts'

defineProps({
  defaultMessages: {
    type: Object as () => DefaultMessages,
    required: true,
  },
})

const store = useConfirmModalStore()
const { visible, options } = storeToRefs(store)
</script>

<template>
  <Teleport to="body">
    <div v-if="visible">
      <div class="modal modal-blur show d-block" @click.self="store.cancel()">
        <div class="modal-dialog modal-sm modal-dialog-centered">
          <div class="modal-content">
            <button class="btn-close" @click="store.cancel()" />

            <div class="modal-status bg-danger" />

            <div class="modal-body text-center py-4">
              <IconAlertTriangle :size="48" class="mb-2 text-danger" />
              <h3>{{ options.title || defaultMessages.title }}</h3>
              <div class="text-secondary">
                {{ options.description || defaultMessages.description }}
              </div>
            </div>

            <div class="modal-footer">
              <div class="w-100">
                <div class="row">
                  <div class="col">
                    <button class="btn w-100" @click="store.cancel()">
                      {{ options.cancelLabel || defaultMessages.cancelLabel }}
                    </button>
                  </div>
                  <div class="col">
                    <button class="btn btn-danger w-100" @click="store.confirm()">
                      {{ options.confirmLabel || defaultMessages.confirmLabel }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop fade show" />
    </div>
  </Teleport>
</template>
