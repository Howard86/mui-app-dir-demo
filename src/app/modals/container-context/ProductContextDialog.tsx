'use client'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import { NORMALIZED_PRODUCTS } from '../constants'
import {
  useSelectedProductId,
  useSetSelectedProductId,
} from './ProductContextProvider'

// similar to src/components/ProductDialog.tsx
export default function ProductContextDialog() {
  const id = useSelectedProductId()
  const handleClose = useSetSelectedProductId()

  const product = id ? NORMALIZED_PRODUCTS.entities[id] : undefined
  const open = Boolean(product)

  console.log(
    `called product.id=${product?.id} product dialog with open=${open}`
  )

  return (
    <Dialog maxWidth="sm" open={open} onClose={handleClose}>
      {product && (
        <>
          <DialogTitle>{product.name}</DialogTitle>
          <DialogContent>
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={200}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <Typography variant="body1" component="p">
              {product.description}
            </Typography>
            <Typography variant="caption" component="span">
              Price: ${product.price}
            </Typography>
          </DialogContent>
        </>
      )}
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
