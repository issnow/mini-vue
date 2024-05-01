import {createComponentInstance, setupComponent} from "./component";

export function render(vnode, container) {
  //patch
  patch(vnode, container)
}

function patch(vnode, container) {
  //去处理组件
  //判断是不是element类型
  processComponent(vnode, container)
}

function processComponent(vnode, container) {
  mountComponent(vnode, container)
}

function mountComponent(vnode, container) {
  const instance = createComponentInstance(vnode)
  setupComponent(instance)
  setupRenderEffect(instance, container)
}

function setupRenderEffect(instance, container) {
  const substree = instance.render()
  //vnode -> patch
  //vnode -> element -> mountElement
  patch(substree, container)
}