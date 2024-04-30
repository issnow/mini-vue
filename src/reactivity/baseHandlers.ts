import {track, trigger} from "./effect";

const get = createGetter()
const set = createSetter()
const readonlyGet = createGetter(true)
function createGetter(readOnly: boolean = false) {
  return function get(target, key) {
    const res = Reflect.get(target, key)
    //依赖收集
    if (!readOnly) {
      track(target, key)
    }
    return res
  }
}

function createSetter() {
  return (target, key, value) => {
    const res = Reflect.set(target, key, value)
    //触发依赖
    trigger(target, key);
    return res
  }
}

export const mutableHandler = {
  get,
  set
};
export const readonlyHandler = {
  get: readonlyGet,
  set(target, key, value) {
    return true
  }
};