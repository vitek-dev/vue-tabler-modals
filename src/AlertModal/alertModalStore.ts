import { defineStore } from 'pinia'
import { ref } from 'vue'

export type AlertPayload = {
  title?: string
  description?: string
  confirmLabel?: string
  type?: 'info' | 'success' | 'warning' | 'danger'
}

let resolver: (() => void) | null = null

export const useAlertModalStore = defineStore('vd__alertModal', () => {
  const visible = ref(false)
  const options = ref<AlertPayload>({})

  const open = (payload: AlertPayload = {}) => {
    options.value = payload
    visible.value = true

    return new Promise<void>((resolve) => {
      resolver = resolve
    })
  }

  const close = () => {
    visible.value = false
    resolver?.()
    resolver = null
  }

  return {
    visible,
    options,

    open,
    close,
  }
})
