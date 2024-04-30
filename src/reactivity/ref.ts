import {reactive} from "./reactive";
import {isTracking, refTrigger, trackEffects} from './effect';
import {isObject} from "../shared";

class RefImpl {
  _value: any;
  dep
  private _rawValue: any;

  constructor(value) {
    this._rawValue = value;
    //如果value是obj,则需要reactive处理
    this._value = isObject(value) ? reactive(value) : value;
    this.dep = new Set()
  }

  get value() {
    //依赖收集
    if (isTracking()) {
      trackEffects(this.dep)
    }
    return this._value;
  }

  set value(value) {
    if (Object.is(value, this._rawValue)) return
    this._value = isObject(value) ? reactive(value) : value;
    this._rawValue = value;
    //更新依赖
    refTrigger(this.dep)
  }
}

export function ref(value) {
  return new RefImpl(value);
}

export function isRef() {

}

export function unRef() {

}

export function proxyRefs() {

}