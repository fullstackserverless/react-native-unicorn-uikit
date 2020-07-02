import React, { memo } from 'react'
import { Platform, StyleProp, TextStyle, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { ScaledSheet } from 'react-native-size-matters'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { W, primary, secondary, gray } from '../constants'

const KLMN = Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
const Dolbak = Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush'
const Etna = Platform.OS === 'ios' ? 'Etna' : 'etna-free-font'

const styles = ScaledSheet.create({
  h0Style: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '45@s',
    fontFamily: Etna,
    color: secondary
  },
  h0StyleDark: {
    fontSize: Platform.OS === 'ios' ? '35@s' : '45@s',
    fontFamily: Etna,
    color: primary
  },
  h1Style: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '20@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: '#1D1E1F'
  },
  h1StyleDark: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '20@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: '#ffffff'
  },
  h2Style: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: Dolbak,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: '#1D1E1F'
  },
  h2StyleDark: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: Dolbak,
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: '#ffffff'
  },
  h3Style: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: secondary,
    color: '#1D1E1F'
  },
  h3StyleDark: {
    fontSize: Platform.OS === 'ios' ? '15@s' : '15@s',
    fontFamily: KLMN,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: '#ffffff'
  },
  h4Style: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: '#707070'
  },
  h4StyleDark: {
    fontSize: Platform.OS === 'ios' ? '23@s' : '23@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: '#707070'
  },
  h5Style: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: '#D1CDCD'
  },
  h5StyleDark: {
    fontSize: Platform.OS === 'ios' ? '25@s' : '30@s',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: '#D1CDCD'
  },
  h6Style: {
    fontSize: Platform.OS === 'ios' ? '13@s' : '13@s',
    fontFamily: KLMN,
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    color: '#1D1E1F'
  },
  h6StyleDark: {
    fontSize: Platform.OS === 'ios' ? '13@s' : '13@s',
    fontFamily: KLMN,
    width: W - 90,
    textAlign: 'center',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textShadowColor: primary,
    color: '#ffffff'
  },
  h7Style: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: KLMN,
    color: '#1D1E1F'
  },
  h7StyleDark: {
    fontSize: Platform.OS === 'ios' ? '12@s' : '12@s',
    fontFamily: KLMN,
    color: '#ffffff'
  },
  h8Style: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: '3270Narrow',
    color: secondary
  },
  h8StyleDark: {
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: '3270Narrow',
    color: primary
  },
  bodyStyle: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? '19@s' : '17@s'
      },
      {
        fontSize: Platform.OS === 'ios' ? '12@s' : '17@s'
      }
    ),
    fontFamily: KLMN,
    color: gray
  },
  bodyStyleDark: {
    textAlign: 'left',
    ...ifIphoneX(
      {
        fontSize: Platform.OS === 'ios' ? 19 : 17
      },
      {
        fontSize: Platform.OS === 'ios' ? 12 : 17
      }
    ),
    fontSize: Platform.OS === 'ios' ? '16@s' : '16@s',
    fontFamily: KLMN,
    color: gray
  }
})

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  h3?: boolean
  h4?: boolean
  h5?: boolean
  h6?: boolean
  h7?: boolean
  h8?: boolean
  body?: boolean
  title: string
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
}

const Txt = memo<TxtT>(
  ({
    h0,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    h7,
    h8,
    body,
    title,
    textStyle,
    numberOfLines,
    ellipsizeMode
  }) => {
    const { dark } = useTheme()
    const {
      h0Style,
      h1Style,
      h2Style,
      h3Style,
      h4Style,
      h5Style,
      h6Style,
      h7Style,
      h8Style,
      bodyStyle,
      h0StyleDark,
      h1StyleDark,
      h2StyleDark,
      h3StyleDark,
      h4StyleDark,
      h5StyleDark,
      h6StyleDark,
      h7StyleDark,
      h8StyleDark,
      bodyStyleDark
    } = styles
    return (
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode={ellipsizeMode}
        style={[
          textStyle,
          h0 && StyleSheet.flatten([dark ? h0StyleDark : h0Style]),
          h1 && StyleSheet.flatten([dark ? h1StyleDark : h1Style]),
          h2 && StyleSheet.flatten([dark ? h2StyleDark : h2Style]),
          h3 && StyleSheet.flatten([dark ? h3StyleDark : h3Style]),
          h4 && StyleSheet.flatten([dark ? h4StyleDark : h4Style]),
          h5 && StyleSheet.flatten([dark ? h5StyleDark : h5Style]),
          h6 && StyleSheet.flatten([dark ? h6StyleDark : h6Style]),
          h7 && StyleSheet.flatten([dark ? h7StyleDark : h7Style]),
          h8 && StyleSheet.flatten([dark ? h8StyleDark : h8Style]),
          body && StyleSheet.flatten([dark ? bodyStyleDark : bodyStyle])
        ]}
      >
        {title}
      </Text>
    )
  }
)

export { Txt }
