import { Container, List, Typography } from '@mui/material'

import ControlledContainer from './ControlledContainer'

export default function ModalContainerDemoPage() {
  return (
    <Container>
      <Typography variant="h4" component="h1">
        Modal Container Demo Page
      </Typography>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ControlledContainer />
      </List>
    </Container>
  )
}
