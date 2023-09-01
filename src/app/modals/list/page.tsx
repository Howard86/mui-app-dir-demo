import { Container, List, Typography } from '@mui/material'

import { PRODUCTS } from '../constants'
import ControlledButton from './ControlledButton'

export default function ModalListDemoPage() {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Modal List Demo Page
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {PRODUCTS.map((product) => (
          <ControlledButton key={product.id} {...product} />
        ))}
      </List>
    </Container>
  )
}
