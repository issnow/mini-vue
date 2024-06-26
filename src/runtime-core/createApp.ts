import {createVNode} from "./vnode";
import {render} from "./renderer";

export function createApp(rootComponent) {
  return {
    mount(rootContainer) {
      //先 vnode
      //所有的逻辑操作都会基于vnode做处理
      //component --> node
      const vnode = createVNode(rootComponent)
      render(vnode, rootContainer)
    }
  }
}

