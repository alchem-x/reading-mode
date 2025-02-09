import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useStorage } from '@vueuse/core'
import { Readability } from '@mozilla/readability'

export const useAppStore = defineStore('app', () => {
  const readingView = useStorage('reading_view_enabled', false)
  const drawerActive = ref(false)
  const contentHtml = ref('')

  function openDrawer() {
    drawerActive.value = true
  }
  function closeDrawer() {
    drawerActive.value = false
  }

  function updateReadingView() {
    if (readingView.value) {
      document.body.classList.add('reading-mode')
      contentHtml.value = new Readability(document.cloneNode(true)).parse()?.content ?? ''
    } else {
      document.body.classList.remove('reading-mode')
      contentHtml.value = ''
    }
  }

  watch(readingView, updateReadingView)

  function disableReadingView() {
    readingView.value = false
  }

  return {
    drawerActive,
    openDrawer,
    closeDrawer,
    readingView,
    contentHtml,
    updateReadingView,
    disableReadingView,
  }
})
