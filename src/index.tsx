import React, { useState } from 'react'
import { StatusBar, Switch, View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { DarkTheme, LightTheme } from './APIComponents'
import { black, white } from './components/constants'

//window.LOG_LEVEL = 'DEBUG'

const App = () => {
  const [value, setValue] = useState<boolean>(!false)
  //const scheme = useColorScheme()
  const {
    dark,
    colors: { background }
  } = useTheme()
  const dev = true
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={value ? DarkTheme : LightTheme}>
          <StatusBar barStyle={value ? 'light-content' : 'dark-content'} />
          {dev && (
            <View
              style={{
                backgroundColor: value ? black : white,
                height: 90
              }}
            >
              <Switch onValueChange={setValue} value={value} style={{ alignSelf: 'center', marginTop: 50 }} />
            </View>
          )}
          <AppNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    </>
  )
}

export default App
