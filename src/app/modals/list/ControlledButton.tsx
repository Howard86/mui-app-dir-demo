'use client'

import { useState } from 'react'

import ProductDialog from '@/components/ProductDialog'
import ProductListButtonItem from '@/components/ProductListButtonItem'

import { Product } from '../constants'

export default function ControlledButton({ id, ...props }: Product) {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen((state) => !state)

  return (
    <>
      <ProductListButtonItem id={id} onClick={handleClick} {...props} />
      <ProductDialog id={id} open={open} onClose={handleClick} />
    </>
  )
}
