import React from 'react'

type PropsT = {
  size?: number
}

export default function IconAlert(props: PropsT): JSX.Element {
  const {size = 2} = props

  return (
    <span
      style={{fontSize: `${size}rem`}}
      className="iconify"
      data-icon="ant-design:alert-twotone"
      data-inline="false"
    />
  )
}
