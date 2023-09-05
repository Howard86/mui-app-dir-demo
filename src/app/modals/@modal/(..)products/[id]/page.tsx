'use client'

import { useRouter } from 'next/navigation'

import ProductDialog from '@/components/ProductDialog'

export interface ProductModalSegmentProps {
  params: {
    id: string
  }
}

export default function ProductModalSegment({
  params,
}: ProductModalSegmentProps) {
  const router = useRouter()
  const onClose = () => router.back()

  return <ProductDialog id={parseInt(params.id, 10)} onClose={onClose} open />
}
