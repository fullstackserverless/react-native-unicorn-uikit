import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
import { ButtonLink } from '../ButtonLink'
import { Txt } from '../Txt'
import { Space } from '../Space'

interface ObjType {
  location: string;
  web: string;
  phone: string
}

interface CardContactsT {
  obj: ObjType
}

const CardContacts = memo(({ obj }: CardContactsT) => {
  const { location, web, phone } = obj
  return (
    <>
      <CardBorder>
        <Txt h7 title="Location" />
        <Space height={5} />
        <Txt body title={location} />
        <Space height={10} />
        <Txt h7 title="Web" />
        <Space height={5} />
        <ButtonLink title={web} />
        <Space height={10} />
        <Txt h7 title="Phone" />
        <Space height={2} />
        <Txt body title={phone} />
      </CardBorder>
    </>
  )
})

export { CardContacts }
