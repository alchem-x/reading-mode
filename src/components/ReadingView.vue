<template>
  <div id="reading-view-container" autofocus @click.stop>
    <div id="reading-view-content" v-html="appStore.contentHtml"></div>
  </div>
</template>

<script setup>
import { useAppStore } from '@/store/app.js'

const appStore = useAppStore()
</script>

<style scoped lang="less">
#reading-view-container {
  box-sizing: border-box;
  position: fixed;
  inset: 0;
  overflow: auto;
  overscroll-behavior: contain;
  outline: none;
  padding: 64px 16px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAACVBMVEX28ef48+n69esoK7jYAAAB4UlEQVQozw2OsW4bQQxEhwLXkDrysGdEqRRgVShfQQq8wOr2jD0jSpXCLvwXbtKfADlFqgSwC/9ljqweZgYzQFnb/QGepYhA9jzmTc1WaSEtQpbFgjWATI00ZZtIckXx8q2Oe5yEByBy+RHOTcM+VVTadULsvxvRC/q8WTwgcWGD+Mnaqa0oy2gw2pKFzK+PzEsus5hP9AHojKslVynLlioVTBEN8cjDNnZoR1uMGTiZAAN47HxMtEkGUE9b8HWzkqNX5Lpk0yVziAJOs46rK1pG/xNuXLjz95fSDoJE5IqG23MAYPtWoeWPvfVtIV/Ng9oH3W0gGMPIOqd4MK4QZ55dV61gOb8Zxp7I9qayaGxp6Q91cmC0ZRdBwEQVHWzSAanlZwVWc9yljeTCeaHjBVvlPSLeyeBUT2rPdJegQI103jVS3uYkyIx1il6mslMDedZuOkwzolsagvPuQAfp7cYg7k9V1NOxfq64PNSvMdwONV4VYEmqlbpZy5OAakRKkjPnL4CBv5/OZRgoWHBmNbxB0LgB1I4vXFj93UoF2/0TPEsWwV9EhbIiTPqYoTHYoMn3enTDjmrFeDTIzaL1bUC/PBIMuF+vSSYSaxoVt90EO3Gu1zrMuMRGUk7Ffv3L+A931Gsb/yBoIgAAAABJRU5ErkJggg==)
    repeat;

  #reading-view-content {
    box-sizing: border-box;
    outline: none;
    max-width: 1000px;
    margin: 0 auto;

    :deep(div) {
      padding: 0;
      margin: 0;
      border: none;
    }

    :deep(img) {
      display: block;
      margin: 0 auto;
      max-width: 100%;
      height: auto;
    }

    :deep(h2),
    :deep(p) {
      text-align: left;
      color: var(--reading-mode-font-color);
      font-size: var(--reading-mode-font-size);
      margin-bottom: var(--reading-mode-paragraph-gap);
      font-family: var(--reading-mode-font-family);
      line-height: var(--reading-mode-line-height);
    }

    :deep(h2) {
      font-size: var(--reading-mode-h2-font-size);
    }
  }
}
</style>
