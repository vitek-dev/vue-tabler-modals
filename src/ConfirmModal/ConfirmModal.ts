import { useConfirmModalStore } from './confirmModalStore.ts'
import type { ConfirmPayload } from './confirmModalStore.ts'

export const ConfirmModal = {
  confirm: (payload: ConfirmPayload) => {
    return useConfirmModalStore().open(payload)
  },
}
