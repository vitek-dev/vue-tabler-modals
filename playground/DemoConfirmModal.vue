<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'
import { ref } from 'vue'
import { ConfirmModal, ConfirmModalHost } from '@/ConfirmModal'

const model = ref({
  title: 'Start autodestruction sequence?',
  description: 'This action is irreversible. Space station will be destroyed ASAP.',
  confirmLabel: 'Yes, do it!',
  cancelLabel: 'Nope',
})

const status = ref<boolean | null | undefined>(undefined)

async function openModal() {
  status.value = null

  status.value = await ConfirmModal.confirm({
    title: model.value.title,
    description: model.value.description,
    confirmLabel: model.value.confirmLabel,
    cancelLabel: model.value.cancelLabel,
  })
}
</script>

<template>
  <div class="card tab-pane active show">
    <div class="card-body">
      <div class="container-tight">
        <div class="alert alert-info justify-content-center mb-5">
          <template v-if="status === true"> ✅ User confirmed the action. </template>
          <template v-else-if="status === false"> ❌ User cancelled the action. </template>
          <template v-else-if="status === null">
            <div class="spinner-border text-primary" role="status"></div>
          </template>
          <template v-else> Modal has not been opened yet. </template>
        </div>

        <div class="card">
          <form class="card-body" @submit.prevent="openModal">
            <div>
              <label class="form-label">Title:</label>

              <div class="input-group input-group-flat">
                <input v-model="model.title" class="form-control" type="text" />
                <span class="input-group-text">
                  <a class="link-secondary cursor-pointer" @click.prevent="model.title = ''">
                    <IconX class="icon" />
                  </a>
                </span>
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Description:</label>

              <div class="input-group input-group-flat">
                <textarea
                  v-model="model.description"
                  class="form-control"
                  rows="3"
                  style="resize: none"
                ></textarea>
                <span class="input-group-text">
                  <a class="link-secondary cursor-pointer" @click.prevent="model.description = ''">
                    <IconX class="icon" />
                  </a>
                </span>
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Cancel Button Label:</label>

              <div class="input-group input-group-flat">
                <input v-model="model.cancelLabel" class="form-control" type="text" />
                <span class="input-group-text">
                  <a class="link-secondary cursor-pointer" @click.prevent="model.cancelLabel = ''">
                    <IconX class="icon" />
                  </a>
                </span>
              </div>
            </div>

            <div class="mt-3">
              <label class="form-label">Confirm Button Label:</label>

              <div class="input-group input-group-flat">
                <input v-model="model.confirmLabel" class="form-control" type="text" />
                <span class="input-group-text">
                  <a class="link-secondary cursor-pointer" @click.prevent="model.confirmLabel = ''">
                    <IconX class="icon" />
                  </a>
                </span>
              </div>
            </div>

            <div class="mt-4">
              <button type="submit" class="btn btn-primary w-100">Open modal</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <ConfirmModalHost
      :default-messages="{
        title: 'Are you sure?',
        description: 'This action cannot be undone.',
        confirmLabel: 'Yes',
        cancelLabel: 'No',
      }"
    />
  </div>
</template>

<style scoped></style>
