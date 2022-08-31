import { computed } from 'vue'
import store from '@/store/index'

// vuex Tools
export const storeState = computed(() => store.state).value
export const storeCommit = (mutation: string, newVal?: any) => store.commit(mutation, newVal)
