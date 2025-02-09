import { createApp, h } from 'vue'
import { createPinia } from 'pinia'
import AppWrapper from '@/components/AppWrapper.vue'
import { isNovelPage } from '@/common/change_page.js'

function renderApp() {
  const app = createApp({
    render() {
      return h(AppWrapper)
    },
  })
  app.use(createPinia())
  const divRef = document.createElement('div')
  divRef.className = 'reading-mode-component'
  document.body.appendChild(divRef)
  app.mount(divRef)
}

if (isNovelPage()) {
  renderApp()
}
