<script setup lang="ts">
import { ref } from 'vue'
import DemoAlertModal from './DemoAlertModal.vue'
import DemoConfirmModal from './DemoConfirmModal.vue'
import DemoFlashMessages from './DemoFlashMessages.vue'
import { FlashMessagesHost } from '@/FlashMessage'
import { IconSun, IconMoon } from '@tabler/icons-vue'

enum Tabs {
  //eslint-disable-next-line no-unused-vars
  Alert = 'Alert Modals',
  //eslint-disable-next-line no-unused-vars
  Confirm = 'Confirm Modals',
  //eslint-disable-next-line no-unused-vars
  Flash = 'Flash Messages',
}

const activeTab = ref<Tabs>(Tabs.Alert)

const theme = ref<'light' | 'dark'>('light')
const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-bs-theme', theme.value)
}
</script>

<template>
  <div class="page-wrapper">
    <div class="page-body">
      <div class="container-xl">
        <div class="card-tabs">
          <ul class="nav nav-tabs" role="tablist">
            <li v-for="tab in Object.values(Tabs)" :key="tab" class="nav-item">
              <a
                class="nav-link"
                :class="{ active: activeTab === tab }"
                @click.prevent="activeTab = tab"
                >{{ tab }}</a
              >
            </li>
            <li class="ms-auto me-3">
              <a class="nav-link" @click.prevent="toggleTheme">
                <IconSun v-if="theme === 'dark'" class="icon" />
                <IconMoon v-else class="icon" />
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <DemoAlertModal v-if="activeTab === Tabs.Alert" />
            <DemoConfirmModal v-if="activeTab === Tabs.Confirm" />
            <DemoFlashMessages v-if="activeTab === Tabs.Flash" />
          </div>
        </div>
      </div>
    </div>

    <FlashMessagesHost />
  </div>
</template>

<style scoped>
a {
  cursor: pointer;
}
</style>
