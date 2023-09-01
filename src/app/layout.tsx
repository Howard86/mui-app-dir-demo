import {
  Dashboard,
  Home,
  Logout,
  Settings,
  Star,
  Support,
} from '@mui/icons-material'
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from '@mui/material'
import type { Metadata } from 'next'
import Link from 'next/link'
import type { ChildrenProps } from 'react'

import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry'

if (process.env.NEXT_PUBLIC_API_MOCKING === 'true') {
  import('../../mocks')
}

export const metadata: Metadata = {
  title: 'Next.js Tailwind Template',
  description: 'Next.js Tailwind Template',
}

const DRAWER_WIDTH = 240

const LINKS = [
  { text: 'Home', href: '/', icon: Home },
  { text: 'Starred', href: '/starred', icon: Star },
  { text: 'Dashboard', href: '/dashboard', icon: Dashboard },
]

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: Settings },
  { text: 'Support', icon: Support },
  { text: 'Logout', icon: Logout },
]

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 2000 }}>
            <Toolbar sx={{ bgcolor: 'background.paper' }}>
              <Dashboard />
              <Typography variant="h6" noWrap component="div" color="black">
                Next.js App Router
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            anchor="left"
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: [6, 7, 8],
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  )
}
