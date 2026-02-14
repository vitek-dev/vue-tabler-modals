<script setup lang="ts">
import { ref } from 'vue'
import { FlashMessage } from '@/FlashMessage'

const model = ref({
  title: 'Start autodestruction sequence?',
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
                @click.prevent="FlashMessage.success(model.title, model.description)"
              >
                Success
              </button>
              <button
                type="submit"
                class="btn btn-danger flex-grow-1"
                @click.prevent="FlashMessage.error(model.title, model.description)"
              >
                Error
              </button>
              <button
                type="submit"
                class="btn btn-info flex-grow-1"
                @click.prevent="FlashMessage.info(model.title, model.description)"
              >
                Info
              </button>
            </nav>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
