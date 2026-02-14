import { defineStore } from 'pinia'
import { ref } from 'vue'

export type ConfirmPayload = {
  title?: string
  description?: string
  confirmLabel?: string
  cancelLabel?: string
}

export type DefaultMessages = {
  title: string
  description: string
  confirmLabel: string
  cancelLabel: string
}

//eslint-disable-next-line no-unused-vars
let resolver: ((decision: boolean) => void) | null = null

export const useConfirmModalStore = defineStore('vd__confirmModal', () => {
  const visible = ref(false)
  const options = ref<ConfirmPayload>({})
  const loading = ref(false)

  const open = (payload: ConfirmPayload = {}) => {
    options.value = payload
    visible.value = true

    return new Promise<boolean>((resolve) => {
      resolver = resolve
    })
  }

  const confirm = () => {
    visible.value = false
    resolver?.(true)
    resolver = null
  }

  const cancel = () => {
    visible.value = false
    resolver?.(false)
    resolver = null
  }

  return {
    visible,
    options,
    loading,

    open,
    confirm,
    cancel,
  }
})
