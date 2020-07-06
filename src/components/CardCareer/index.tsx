import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface ObjType {
  institution: string;
  start: string;
  finish: string;
  description: string;
  link: string;
}

interface CardCareerT {
  obj: ObjType
}

const CardCareer = memo(({ obj } : CardCareerT) => {
  const { institution, start, finish, description } = obj
  return (
    <>
      <CardBorder>
        <Txt h7 title={institution} textStyle={{ textAlign: 'left' }} />
        <Space height={10} />
        <Txt h8 title={`[${start} - ${finish}]`} />
        <Space height={5} />
        <Txt body title={description} />
      </CardBorder>
    </>
  )
})

export { CardCareer }
