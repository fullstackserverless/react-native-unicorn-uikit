import React, { useState } from 'react'
import { StatusBar, Switch, View } from 'react-native'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import AppNavigator from './AppNavigator'
import { DarkTheme, LightTheme } from './APIComponents'

//window.LOG_LEVEL = 'DEBUG'

const App = () => {
  const [value, setValue] = useState<boolean>(!false)
  //const scheme = useColorScheme()
  const {
    colors: { backgroundColor }
  } = useTheme()
  const dev = true
  return (
    <>
      <AppearanceProvider>
        <NavigationContainer theme={value ? DarkTheme : LightTheme}>
          <StatusBar
            barStyle={value ? 'light-content' : 'dark-content'}
            backgroundColor={backgroundColor}
          />
          {dev && (
            <View
              style={{
                backgroundColor: value ? '#1D1E1F' : '#fff',
                height: 90
              }}
            >
              <Switch
                onValueChange={setValue}
                value={value}
                style={{ alignSelf: 'center', marginTop: 50 }}
              />
            </View>
          )}
          <AppNavigator />
        </NavigationContainer>
      </AppearanceProvider>
    </>
  )
}

export default App
