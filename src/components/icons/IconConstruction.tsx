import React from 'react'

type PropsT = {
  size?: number
}

export default function IconConstruction(props: PropsT): JSX.Element {
  const {size = 2} = props

  return (
    <span
      style={{fontSize: `${size}rem`}}
      className="iconify"
      data-icon="noto:construction"
      data-inline="false"
    />
  )
}
