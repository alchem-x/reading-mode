function getElement(label) {
  return Array.from(document.querySelectorAll('a')).find((it) => it.textContent.includes(label))
}

function clickLink(labels) {
  for (const label of labels) {
    const el = getElement(label)
    if (el) {
      el?.click()
      break
    }
  }
}

export function gotoIndex() {
  clickLink(['目录'])
}

const previousPageLabels = ['上一页', '上一章']

export function gotoPreviousPage() {
  clickLink(previousPageLabels)
}

const nextPageLabels = ['下一页', '下一章']

export function gotoNextPage() {
  clickLink(nextPageLabels)
}

export function isNovelPage() {
  return [...previousPageLabels, ...nextPageLabels].some((label) => !!getElement(label))
}
