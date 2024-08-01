'use client'
import { ReactNode } from 'react'

import store from '@/store/projects'
import { StoreContext } from 'storeon/react'

export function Provider({ children }: { children: ReactNode }) {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}
