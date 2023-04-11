import { ref, computed, onMounted, onUnmounted } from 'vue'
import { throttle } from 'underscore'

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

export const useWindowScroll = () => {
  const x = ref(0)
  const y = ref(0)

  const windowscroll = throttle(() => {
    x.value = window.scrollX
    y.value = window.scrollY
  }, 100)

  onMounted(() => {
    window.addEventListener('scroll', windowscroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', windowscroll)
  })

  return { x, y }
}
