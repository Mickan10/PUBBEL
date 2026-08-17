export function blurActiveElement() {
  ;(document.activeElement as HTMLElement)?.blur()
}
