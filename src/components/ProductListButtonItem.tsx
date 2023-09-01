import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemButtonProps,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'

import { Product } from '@/app/modals/constants'

export interface ProductListButtonItemProps
  extends Product,
    Omit<ListItemButtonProps, 'id'> {}

export default function ProductListButtonItem({
  image,
  name,
  price,
  id: _id,
  description: _description,
  ...props
}: ProductListButtonItemProps) {
  return (
    <ListItemButton {...props}>
      <ListItemAvatar>
        <Avatar>
          <Image
            src={image}
            alt={name}
            width={64}
            height={64}
            style={{
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`$${price}`} />
    </ListItemButton>
  )
}
