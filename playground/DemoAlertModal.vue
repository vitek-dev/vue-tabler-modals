<script setup lang="ts">
import { IconX } from '@tabler/icons-vue'
import { ref } from 'vue'
import { AlertModal, AlertModalHost } from '@/AlertModal'

const model = ref({
  title: 'Autodestruction will start soon',
  description: 'This action is irreversible. Space station will be destroyed ASAP.',
})
</script>

<template>
  <div class="card tab-pane active show">
    <div class="card-body">
      <div class="container-tight">
        <div class="card">
          <form class="card-body" @submit.prevent="">
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

            <nav class="mt-4 btn-list">
              <button
                type="submit"
                class="btn btn-success flex-grow-1"
                @click.prevent="AlertModal.success(model.title, model.description)"
              >
                Success
              </button>
              <button
                type="submit"
                class="btn btn-danger flex-grow-1"
                @click.prevent="AlertModal.danger(model.title, model.description)"
              >
                Danger
              </button>
              <button
                type="submit"
                class="btn btn-warning flex-grow-1"
                @click.prevent="AlertModal.warning(model.title, model.description)"
              >
                Warning
              </button>
              <button
                type="submit"
                class="btn btn-info flex-grow-1"
                @click.prevent="AlertModal.info(model.title, model.description)"
              >
                Info
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>

    <AlertModalHost
      :default-messages="{
        title: 'Are you sure?',
        description: 'This action cannot be undone.',
        confirmLabel: 'Cool!',
      }"
    />
  </div>
</template>

<style scoped></style>
