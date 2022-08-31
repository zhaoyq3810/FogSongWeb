import initState from './state'
import { IMutations } from '@/interface'

// 自动配置
const defaultMutations: IMutations = {}
for (const key in initState) {
  const newMutationName = key.slice(0, 1).toUpperCase() + key.slice(1)
  defaultMutations[`set${ newMutationName }`] = (state, value) => {
    state[key] = value
  }
}

export default {
  ...defaultMutations,

  // 初始化vuex
  init(state) {
    for (const i in state) {
      state[i] = initState[i]
    }
  },
} as IMutations
