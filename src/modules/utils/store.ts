import { Loading } from 'notiflix'
import { reactive, watch } from 'vue'

interface State {
  loading: number
}

const state = reactive<State>({
  loading: 0,
})

watch(state, (value: State) => {
  // Loading
  if (value.loading) Loading.dots()
  else Loading.remove()
})

const AppStore = {
  state,

  loading(active: boolean) {
    if (active) state.loading++
    else if (state.loading > 0) state.loading--
    else state.loading = 0
  },
}

export { AppStore }
