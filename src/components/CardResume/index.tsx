import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'
import { Txt } from '../Txt'
import { Avatar } from '../Avatar'
import { CardInfo } from '../CardInfo'
import { CardBorder } from '../CardBorder'
import { Star } from '../Star'
import { Space } from '../Space'
import { ButtonRate } from '../ButtonRate'

const styles = StyleSheet.create({
  starStyle: {
    position: 'absolute',
    top: 10,
    right: 10,
    justifyContent: 'flex-end'
  }
})
interface ObjType {
  title: string
  avatar: string
  cost: number
  rate: number
}
interface ObjType2 {
  position: string
  language: string
  stack: string
  experience: string
  salary: number
}

interface CardResumeT {
  obj: ObjType
  obj2: ObjType2
  bool?: boolean
}

const CardResume = memo(({ obj, obj2, bool = false }: CardResumeT) => {
  const { title, rate, avatar } = obj
  const { starStyle } = styles
  const user = (
    <>
      <View style={starStyle}>
        <Star star={bool} />
      </View>
      <Avatar uri={avatar} size="large" />
      <Space height={10} />
      <Txt h1 title={title} textStyle={{ textAlign: 'center' }} />
      <Space height={20} />
      <ButtonRate title={rate} />
      <Space height={20} />
    </>
  )
  return (
    <>
      <CardBorder>
        {bool && user}
        <CardInfo obj={obj2} bool={false} />
      </CardBorder>
    </>
  )
})

export { CardResume }
