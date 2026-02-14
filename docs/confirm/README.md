# Confirm modal

![screenshot.png](screenshot.png)

## Quickstart

### Register Host component in your main App component

```vue
<script setup>
import { ConfirmModalHost } from '@vitekdev/vue-tabler-modals'
</script>

<template>
  <div>
    <ConfirmModalHost :default-messages="{ title: 'Confirm action', description: 'Are you sure you want to perform this action?', confirmLabel: 'Yes', cancelLabel: 'No' }" />
    
    <RouterView />
  </div>
</template>
```

### Usage

```vue
<script setup>
import { ConfirmModal } from '@vitekdev/vue-tabler-modals'

const deleteItem = async () {
  const confirmed = await ConfirmModal.confirm({
    title: 'Delete item?',
    description: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmLabel: 'Delete',
    cancelLabel: 'Cancel'
  })

  if (confirmed) {
    // TODO: Perform delete action
  }
}
</script>

<template>
  <button @click="deleteItem">Delete</button>
</template>
```