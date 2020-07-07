import React, { memo } from 'react'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'

interface Theme {
  dark: boolean
  colors: {
    primary: string
    background: string
    card: string
    text: string
    border: string
  }
}

interface ThemeProviderT {
  children?: React.ReactNode
  theme?: Theme
}

const ThemeProvider = memo(({ children, theme }: ThemeProviderT) => {
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={theme}>{children}</NavigationContainer>
      </AppearanceProvider>
    </>
  )
})


export default ThemeProvider
