# Flash messages

![screenshot.png](screenshot.png)

## Quickstart

### Register Host component in your main App component

```vue
<script setup>
import { FlashMessageHost } from '@vitekdev/vue-tabler-modals'
</script>

<template>
  <div>
    <FlashMessageHost />
        
    <RouterView />
  </div>
</template>
```

### Usage

```vue
<script setup>
import { FlashMessage } from '@vitekdev/vue-tabler-modals'

const flash = () => {
  FlashMessage.success('Success', 'Your action was successful!')
  FlashMessage.error('Error', 'Something went wrong. Please try again.')
  FlashMessage.info('Info', 'This is an informational message.')
}
</script>

<template>
  <button @click="flash">Show flash messages</button>
</template>
```