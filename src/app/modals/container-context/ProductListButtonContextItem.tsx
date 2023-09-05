'use client'

import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'

import { ProductListButtonItemProps } from '@/components/ProductListButtonItem'

import { useSetSelectedProductId } from './ProductContextProvider'

// similar to src/components/ProductListButtonItem.tsx
export default function ProductListButtonContextItem({
  image,
  name,
  price,
  id,
  description: _description,
  ...props
}: ProductListButtonItemProps) {
  const handleClick = useSetSelectedProductId(id)

  return (
    <ListItemButton onClick={handleClick} {...props}>
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
