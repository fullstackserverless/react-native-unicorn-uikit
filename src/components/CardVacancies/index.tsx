import React, { memo, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Txt } from '../Txt'
import { CardBorder } from '../CardBorder'
import { Star } from '../Star'
import { Space } from '../Space'
import { W } from '../constants'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

interface ObjType {
  position: string;
  description: string;
  owner: string;
  rate: number
}

interface CardVacanciesT {
  obj: ObjType;
  onPress?: () => void;
  detail?: boolean
}

const CardVacancies = memo(({ obj, onPress, detail }: CardVacanciesT) => {
  const { position, description, owner, rate } = obj
  const { container } = styles
  const [star, setStar] = useState(false)
  return (
    <>
      <CardBorder>
        <View style={container}>
          <Txt
            h1
            title={position}
            textStyle={{ width: W - 110 }}
            numberOfLines={1}
          />
          {false &&  <Star bool={star} onPress={() => setStar(!star)} /> }

        </View>
        <Space height={20} />
        <TouchableOpacity onPress={onPress}>
          {detail ? (
            <Txt body title={description} />
          ) : (
            <Txt body numberOfLines={4} title={description} />
          )}
        </TouchableOpacity>
        <Space height={20} />
        <View style={container}>
          <Txt
            h7
            title={owner}
            textStyle={{ width: W - 140 }}
            numberOfLines={1}
          />
          <Txt h7 title={`$ ${rate}`} />
        </View>
      </CardBorder>
    </>
  )
})

export { CardVacancies }
