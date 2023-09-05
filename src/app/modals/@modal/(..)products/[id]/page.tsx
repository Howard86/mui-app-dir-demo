'use client'

import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import ProductDialog from '@/components/ProductDialog'

export interface ProductModalSegmentProps {
  params: {
    id: string
  }
}

export default function ProductModalSegment({
  params,
}: ProductModalSegmentProps) {
  const theme = useTheme()
  const router = useRouter()
  const timeoutRef = useRef<NodeJS.Timeout | undefined>()
  const [open, setOpen] = useState(true)
  const onClose = () => {
    setOpen(false)
    timeoutRef.current = setTimeout(
      () => router.back(),
      // Reference: packages/mui-material/src/styles/createTransitions.js
      theme.transitions.duration.leavingScreen
    )
  }

  useEffect(
    () => () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    },
    []
  )

  return (
    <ProductDialog id={parseInt(params.id, 10)} onClose={onClose} open={open} />
  )
}
