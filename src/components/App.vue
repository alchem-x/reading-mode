<template>
  <div class="reading-mode-app-container">
    <Transition name="fade">
      <ReadingView v-if="appStore.readingView" />
    </Transition>
    <NButton secondary size="large" class="open-button" @click.stop="appStore.openDrawer"> 📖</NButton>
    <NDrawer placement="right" width="min(100%, 480px)" v-model:show="appStore.drawerActive">
      <NDrawerContent title="阅读模式" closable header-class="user-select-none">
        <DrawerBody />
      </NDrawerContent>
    </NDrawer>
  </div>
</template>

<script setup>
import { NButton, NDrawer, NDrawerContent } from 'naive-ui'
import DrawerBody from '@/components/DrawerBody.vue'
import { useAppStore } from '@/store/app.js'
import ReadingView from '@/components/ReadingView.vue'
import { onMounted } from 'vue'
import { initMeta } from '@/common/meta.js'

const appStore = useAppStore()

onMounted(() => {
  initMeta()
  appStore.updateReadingView()
})
</script>

<style scoped lang="less">
.reading-mode-app-container {
  position: relative;
  z-index: 10;

  .open-button {
    position: fixed;
    top: 64px;
    right: 16px;
  }
}
</style>

<style lang="less">
:root {
  --reading-mode-font-family:
    ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --reading-mode-font-size: 20px;
  --reading-mode-h2-font-size: 28px;
  --reading-mode-line-height: 2;
  --reading-mode-paragraph-gap: 24px;
  --reading-mode-font-color: #262626;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.user-select-none {
  user-select: none;
}

body.reading-mode {
  overflow: hidden;

  > :not(.reading-mode-component):not(.n-drawer-container) {
    display: none;
  }
}
</style>
