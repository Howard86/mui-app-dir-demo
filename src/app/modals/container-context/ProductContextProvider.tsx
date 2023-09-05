'use client'

import { ChildrenProps, createContext, useContext, useState } from 'react'

const ProductContext = createContext<
  ReturnType<typeof useState<number | undefined>>
>(null as never)

export default function ProductContextProvider({ children }: ChildrenProps) {
  const context = useState<number | undefined>()

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  )
}

export const useSelectedProductId = () => useContext(ProductContext)?.[0]
export const useSetSelectedProductId = (id?: number) => {
  const setSelectedId = useContext(ProductContext)[1]

  return () => setSelectedId(id)
}
