import { Box, Button, Stack, TextField, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Box>
      <Typography component="h1" variant="h4">
        Hello World!
      </Typography>
      <Button variant="contained">Mui Button</Button>
      <Stack component="form" noValidate m={4} spacing={3}>
        <TextField name="email" label="Email" />
        <TextField name="password" label="Password" type="password" />
        <Button type="submit">Log In</Button>
      </Stack>
    </Box>
  )
}
