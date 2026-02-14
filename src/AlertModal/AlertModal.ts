import { useAlertModalStore } from './alertModalStore'
import type { AlertPayload } from './alertModalStore'

export const AlertModal = {
  show: (payload: AlertPayload) => {
    return useAlertModalStore().open(payload)
  },

  info: (title: string, description?: string) => {
    return useAlertModalStore().open({
      title,
      description,
      type: 'info',
    })
  },

  success: (title: string, description?: string) => {
    return useAlertModalStore().open({
      title,
      description,
      type: 'success',
    })
  },

  warning: (title: string, description?: string) => {
    return useAlertModalStore().open({
      title,
      description,
      type: 'warning',
    })
  },

  danger: (title: string, description?: string) => {
    return useAlertModalStore().open({
      title,
      description,
      type: 'danger',
    })
  },
}
