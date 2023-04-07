import { computed } from 'vue'

type Props = {
  [key: string]: object
}

export const useVMdel = <T extends Props, K extends keyof Props>(
  props: T,
  propsName: K,
  emit: (e: any, v: any) => void
) => {
  return computed({
    get() {
      return new Proxy(props[propsName], {
        set(obj, name, val) {
          emit('update:' + propsName, {
            ...obj,
            [name]: val
          })
          return true
        }
      })
    },
    set(val) {
      emit('update:' + propsName, val)
    }
  })
}
