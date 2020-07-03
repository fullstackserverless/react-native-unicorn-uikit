import React, { memo } from 'react'
import { CardBorder } from '../CardBorder'
// eslint-disable-next-line import/extensions,import/no-unresolved
import { Txt } from '../Txt'

interface CardT {
  title: string
}

const CardAbout = memo<CardT>(({ title }) => {
  return (
    <>
      <CardBorder>
        <Txt body title={title} />
      </CardBorder>
    </>
  )
})

export { CardAbout }
