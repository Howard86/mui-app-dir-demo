import {
  AltRouteOutlined,
  ArchiveOutlined,
  Dashboard,
  Home,
  ListOutlined,
  Logout,
  MoveToInboxOutlined,
  OutboxOutlined,
  Settings,
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

const PLACEHOLDER_LINKS = [
  { text: 'Settings', icon: Settings },
  { text: 'Support', icon: Support },
  { text: 'Logout', icon: Logout },
]

const LINKS = [
  { text: 'Home', href: '/', icon: Home },
  {
    text: 'Modal Demo',
    children: [
      { text: 'List', href: '/modals/list', icon: ListOutlined },
      {
        text: 'Container',
        href: '/modals/container',
        icon: ArchiveOutlined,
      },
      {
        text: 'Container (Context)',
        href: '/modals/container-context',
        icon: MoveToInboxOutlined,
      },
      {
        text: 'Intercepting Routes',
        href: '/modals/intercepting-routes',
        icon: AltRouteOutlined,
      },
    ],
    icon: OutboxOutlined,
  },
]

type ListLinkItemProps = { level?: number } & (typeof LINKS)[number]

function ListLinkItem({
  text,
  href,
  icon: Icon,
  children,
  level = 0,
}: ListLinkItemProps) {
  if (href) {
    return (
      <ListItem disablePadding>
        <ListItemButton component={Link} href={href}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={text} sx={{ flexBasis: '100%' }} />
        </ListItemButton>
      </ListItem>
    )
  }

  if (!children) return null

  return (
    <ListItem sx={{ flexWrap: 'wrap' }}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={text} />
      <List sx={{ width: '100%' }}>
        {children.map((item) => (
          <ListLinkItem key={level + item.text} level={level + 1} {...item} />
        ))}
      </List>
    </ListItem>
  )
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBar position="fixed" sx={{ zIndex: 1300 }}>
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
              {LINKS.map((item) => (
                <ListLinkItem key={item.text} {...item} />
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
