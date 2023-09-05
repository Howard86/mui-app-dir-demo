import { Container, List, Typography } from '@mui/material'
import Link from 'next/link'

import ProductListButtonItem from '@/components/ProductListButtonItem'

import { PRODUCTS } from '../constants'

export default function ModalInterceptingRoutesDemoPage() {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Modal Intercepting Routes Demo Page
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {PRODUCTS.map((product) => (
          <ProductListButtonItem
            key={product.id}
            component={Link}
            href={`/products/${product.id}`}
            {...product}
          />
        ))}
      </List>
    </Container>
  )
}
