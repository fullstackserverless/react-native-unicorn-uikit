import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import faker from 'faker'
import { useTheme } from '@react-navigation/native'
import {
  Avatar,
  Button,
  Txt,
  Space,
  ButtonStatusIssue,
  ButtonCircle,
  ButtonText,
  ButtonLink
} from './components'
import { black } from './components/constants'

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: 65,
    paddingHorizontal: 15
  }
})

const UIKit = () => {
  const { scrollView } = styles
  const _onPress = () => console.log('click') // eslint-disable-line
  const { image, name, lorem, random } = faker
  return (
    <>
      <ScrollView style={[scrollView, { backgroundColor: black }]}>
        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Buttons" />
          <Space height={30} />
          <Button title="Done" onPress={_onPress} />
          <Space height={20} />
          <Button title="Cancel" cancel />
          <Space height={30} />
          <ButtonStatusIssue title={`Open ${34}`} open />
          <Space height={30} />
          <ButtonStatusIssue title={`Closed ${34}`} />
          <Space height={30} />
          <ButtonCircle title="Press me" />
          <Space height={30} />
          <ButtonText title="forgot password?" />
          <Space height={30} />
          <ButtonLink title="link" />
          <Space height={30} />
        </View>

        <View style={{ alignItems: 'center' }}>
          <Txt h0 title="Avatars" />
          <Space height={30} />
          <Avatar uri={image.avatar()} size="xLarge" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="large" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="medium" />
          <Space height={20} />
          <Avatar uri={image.avatar()} size="small" />
          <Space height={90} />
        </View>

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
        <Space height={300} />
      </ScrollView>
    </>
  )
}

export default UIKit
