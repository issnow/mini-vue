const a = {x:1}

const b = new Proxy(a, {
  get(target, key){
    return Reflect.get(target, key)
  },
  set(target, key, value){
    Reflect.set(target, key, value)
  }
})

