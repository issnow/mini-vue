import {mutableHandler, readonlyHandler} from "./baseHandlers";

export function reactive(raw) {
  return createActiveObject(raw, mutableHandler)
}

export function readonly(raw) {
  return createActiveObject(raw, readonlyHandler);
}

function createActiveObject(raw, handler){
  return new Proxy(raw, handler);
}