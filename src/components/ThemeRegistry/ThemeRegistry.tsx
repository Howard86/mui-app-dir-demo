'use client'

import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import { ChildrenProps } from 'react'

import NextAppDirEmotionCacheProvider from './EmotionCache'
import theme from './theme'

export default function ThemeRegistry({ children }: ChildrenProps) {
  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  )
}
