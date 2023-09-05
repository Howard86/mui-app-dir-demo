'use client'

import { useRouter } from 'next/navigation'

import ProductDialog from '@/components/ProductDialog'

export interface ProductModalPageProps {
  params: {
    id: string
  }
}

export default function ProductModalPage({ params }: ProductModalPageProps) {
  const router = useRouter()

  return (
    <ProductDialog
      id={parseInt(params.id, 10)}
      onClose={() => router.push('/modals/intercepting-routes')}
      open
    />
  )
}
