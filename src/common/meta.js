export function initMeta() {
  const viewportMeta = document.createElement('meta')
  viewportMeta.name = 'viewport'
  viewportMeta.content = 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0'
  document.head.appendChild(viewportMeta)
  //
  const uaMeta = document.createElement('meta')
  uaMeta.httpEquiv = 'X-UA-Compatible'
  uaMeta.content = 'ie=edge'
  document.head.appendChild(uaMeta)
}
