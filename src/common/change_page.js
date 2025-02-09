function clickLink(label) {
  Array.from(document.querySelectorAll('a'))
    .find((it) => it.textContent.includes(label))
    ?.click()
}

export function gotoIndex() {
  clickLink('目录')
}

export function gotoPreviousChapter() {
  clickLink('上一章')
}

export function gotoNextChapter() {
  clickLink('下一章')
}
