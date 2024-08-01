import { StoreonModule, createStoreon } from 'storeon'

export interface State {
  globalMessage: string
  notification: boolean
  status: 'error' | 'pending' | 'success'
}

export interface Events {
  globalMessage: string
  notification: boolean
  status: 'error' | 'pending' | 'success'
}

const defaultStoreValue: State = {
  globalMessage: '',
  notification: false,
  status: 'pending',
}

export const projects: StoreonModule<State, Events> = store => {
  store.on('@init', () => defaultStoreValue)
  store.on('notification', (state, data) => ({ notification: data }))
  store.on('globalMessage', (state, data) => ({ globalMessage: data }))
  store.on('status', (state, data) => ({ status: data }))
}
export const store = createStoreon<State, Events>([projects])
