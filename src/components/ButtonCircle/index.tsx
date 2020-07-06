import React, { memo, useState } from 'react'
import {
  StyleSheet,
  StyleProp,
  TextStyle,
  View,
  TouchableOpacity
} from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Txt } from '../Txt'
import { white, black, primary, secondary } from '../constants'

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 180,
    height: 180,
    borderRadius: 180 / 2,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
    elevation: 5
  },
  h3: {
    alignSelf: 'center',
    marginLeft: 15,
    width: 110
  }
})

interface ButtonCircleT {
  color?: string;
  title: string;
  onPress?: () => void;
  textStyle?: StyleProp<TextStyle>
}

const ButtonCircle = memo(({ onPress, title, textStyle }: ButtonCircleT) => {
  const { buttonStyle, h3 } = styles
  const { dark } = useTheme()
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          buttonStyle,
          {
            backgroundColor: dark ? black : white,
            shadowColor: dark ? primary : secondary
          }
        ]}
      >
        <Txt h3 title={title} textStyle={[textStyle, h3]} />
      </View>
    </TouchableOpacity>
  )
})

export { ButtonCircle }
