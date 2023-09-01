'use client'

import { useState } from 'react'

import ProductDialog from '@/components/ProductDialog'
import ProductListButtonItem from '@/components/ProductListButtonItem'

import { PRODUCTS } from '../constants'

export default function ControlledContainer() {
  const [selectedId, setSelectedId] = useState<number | undefined>()

  const handleClose = () => setSelectedId(undefined)

  return (
    <>
      {PRODUCTS.map((product) => (
        <ProductListButtonItem
          key={product.id}
          {...product}
          selected={selectedId === product.id}
          onClick={() => setSelectedId(product.id)}
        />
      ))}
      <ProductDialog
        id={selectedId}
        open={Boolean(selectedId)}
        onClose={handleClose}
      />
    </>
  )
}
