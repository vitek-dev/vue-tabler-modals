import { type FlashMessageItem, useFlashMessagesStore } from './flashMessagesStore'

export enum FlashMessageType {
  // eslint-disable-next-line no-unused-vars
  ERROR = 'toast-error',
  // eslint-disable-next-line no-unused-vars
  SUCCESS = 'toast-success',
  // eslint-disable-next-line no-unused-vars
  INFO = 'toast-info',
}

export type FlashPayload = {
  title: string
  text: string
  type: FlashMessageType | string
}

const createFlashMessage = (title: string, text: string, type: string): FlashMessageItem => {
  return {
    id: Date.now() + Math.random(),
    title,
    text,
    type,
    created: new Date(),
  }
}

export const FlashMessage = {
  show: (payload: FlashPayload) => {
    useFlashMessagesStore().add(createFlashMessage(payload.title, payload.text, payload.type))
  },

  success: (title: string, text: string) => {
    useFlashMessagesStore().add(createFlashMessage(title, text, FlashMessageType.SUCCESS))
  },

  error: (title: string, text: string) => {
    useFlashMessagesStore().add(createFlashMessage(title, text, FlashMessageType.ERROR))
  },

  info: (title: string, text: string) => {
    useFlashMessagesStore().add(createFlashMessage(title, text, FlashMessageType.INFO))
  },

  generalError: () => {
    useFlashMessagesStore().add(
      createFlashMessage(
        'Něco se nepovedlo',
        'Požadovaná akce nemohla být dokončena, protože došlo k chybě.',
        FlashMessageType.ERROR
      )
    )
  },

  generalSuccess: () => {
    useFlashMessagesStore().add(
      createFlashMessage(
        'Úspešně dokončeno',
        'Požadovaná akce byla úspěšně dokončena.',
        FlashMessageType.SUCCESS
      )
    )
  },

  handleGeneralPromise: (promise: Promise<unknown>): Promise<void> => {
    return new Promise((resolve, reject) => {
      promise.then(
        () => {
          FlashMessage.generalSuccess()
          resolve()
        },
        () => {
          FlashMessage.generalError()
          reject()
        }
      )
    })
  },
}
