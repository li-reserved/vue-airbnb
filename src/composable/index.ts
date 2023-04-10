import { ref, computed, onMounted, onUnmounted } from 'vue'

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

  function windowscroll() {
    x.value = window.scrollX
    y.value = window.scrollY
  }

  onMounted(() => {
    window.addEventListener('scroll', windowscroll)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', windowscroll)
  })

  return { x, y }
}
