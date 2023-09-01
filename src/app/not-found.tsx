import { Box, Button, Container, Typography } from '@mui/material'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container>
      <Box maxWidth={480} margin="auto" textAlign="center">
        <Typography variant="h3" gutterBottom>
          Sorry, page not found!
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </Typography>
        <Button component={Link} href="/" size="large" variant="contained">
          Go to Home
        </Button>
      </Box>
    </Container>
  )
}
