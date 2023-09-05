import { Container, List, Typography } from '@mui/material'

import { PRODUCTS } from '../constants'
import ProductContextDialog from './ProductContextDialog'
import ProductContextProvider from './ProductContextProvider'
import ProductListButtonContextItem from './ProductListButtonContextItem'

export default function ModalContainerDemoPage() {
  return (
    <ProductContextProvider>
      <Container>
        <Typography variant="h4" component="h1">
          Modal Container (Context) Demo Page
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {PRODUCTS.map((product) => (
            <ProductListButtonContextItem key={product.id} {...product} />
          ))}
        </List>
      </Container>
      <ProductContextDialog />
    </ProductContextProvider>
  )
}
