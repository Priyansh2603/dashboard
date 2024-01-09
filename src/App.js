import { useState } from 'react'
import Payment from './Payment'

const smVariant = { navigation: 'drawer', navigationButton: true }
const mdVariant = { navigation: 'sidebar', navigationButton: false }

export default function App() {return (
    <>
      <Payment/>
    </>
  )
}
