<template>
  <div class="drawer-body-container" @click.stop>
    <div class="action-line">
      <div class="action-content">
        <NSwitch v-model:value="appStore.readingView" size="large" />
      </div>
      <NDivider />
      <div class="action-content">
        <NButton @click="onGotoIndex" size="large">目录</NButton>
        <NButton @click="onGotoPreviousChapter" size="large">上一页</NButton>
        <NButton @click="onGotoNextChapter" size="large">下一页</NButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NSwitch, NButton, NDivider } from 'naive-ui'
import { useAppStore } from '@/store/app.js'
import { gotoIndex, gotoNextPage, gotoPreviousPage } from '@/common/change_page.js'

const appStore = useAppStore()

function onGotoIndex() {
  appStore.disableReadingView()
  gotoIndex()
}

function onGotoPreviousChapter() {
  appStore.closeDrawer()
  gotoPreviousPage()
}

function onGotoNextChapter() {
  appStore.closeDrawer()
  gotoNextPage()
}
</script>

<style scoped lang="less">
.drawer-body-container {
  text-align: left;

  .action-line {
    display: flex;
    flex-direction: column;

    .action-content {
      display: flex;
      gap: 8px;
      align-items: center;
    }
  }
}
</style>
