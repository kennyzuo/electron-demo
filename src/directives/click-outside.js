const nodeList = new Map()

let startClick

document.addEventListener("mousedown", (e) => (startClick = e))

document.addEventListener("mouseup", (e) => {
  if (!nodeList.size) return

  for (const { handler } of nodeList.values()) {
    handler(e, startClick)
  }
})

const createDocumentHandler = (el, binding) => {
  return (mouseup = {}, mousedown = {}) => {
    if (el.contains(mouseup.target) || el.contains(mousedown.target)) {
      return
    }

    // 执行用户自定义函数（当点击到 outside 触发）
    binding.value(mouseup)
  }
}

export default {
  beforeMounted(el, binding) {
    nodeList.set(el, {
      handler: createDocumentHandler(el, binding),
      fn: binding.value,
    })
  },
  updated(el, binding) {
    nodeList.set(el, {
      handler: createDocumentHandler(el, binding),
      fn: binding.value,
    })
  },
  unmounted(el, binding) {
    nodeList.delete(el)
  },
}
