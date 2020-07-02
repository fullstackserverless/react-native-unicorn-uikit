import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Txt } from './components'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const { scrollView } = styles
  const {
    colors: { backgroundColor }
  } = useTheme()
  const _onPress = () => console.log('click') // eslint-disable-line
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor }]}>
        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="H0" />
          <Txt h1 title="H1" />
          <Txt h2 title="H2" />
          <Txt h3 title="H3" />
          <Txt h4 title="H4" />
          <Txt h5 title="H5" />
          <Txt h6 title="H6" />
          <Txt h7 title="H7" />
          <Txt h8 title="H8" />
          <Txt body title="body" />
        </View>
      </ScrollView>
    </>
  )
}

export default UIKit
