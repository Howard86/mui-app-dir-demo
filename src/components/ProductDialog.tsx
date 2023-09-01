import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import { NORMALIZED_PRODUCTS, Product } from '@/app/modals/constants'

interface ProductDialogProps extends Omit<DialogProps, 'id'>, Product {
  onClose: VoidFunction
}

export default function ProductDialog({
  id,
  onClose,
  ...props
}: ProductDialogProps) {
  const product = NORMALIZED_PRODUCTS.entities[id]

  if (!product) return null

  console.log(`called product.id=${product.id} product dialog with open=${props.open}`)

  return (
    <Dialog maxWidth="sm" onClose={onClose} {...props}>
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
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
