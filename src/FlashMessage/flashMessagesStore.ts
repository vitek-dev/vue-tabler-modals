import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import type { Ref } from 'vue'

export interface FlashMessageItem {
  id: number
  title: string
  text: string
  type: string
  created: Date
}

export const useFlashMessagesStore = defineStore('vd__flashMessages', () => {
  const i: Ref<number> = ref(0)
  const flashMessages: { [key: number]: FlashMessageItem } = reactive({})

  function add(message: FlashMessageItem): void {
    i.value = i.value + 1
    flashMessages[i.value] = message
  }

  function remove(index: number): void {
    delete flashMessages[index]
  }

  return { i, flashMessages, add, remove }
})
