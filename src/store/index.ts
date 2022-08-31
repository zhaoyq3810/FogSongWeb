import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations'
import { IObj } from '@/interface'

export const isState: IObj = { ...state }
export default createStore({
  state,
  mutations,
})
