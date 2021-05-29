import React from 'react'

type PropsT = {
  size?: number
  color?: string
}

export default function IconSearch(props: PropsT): JSX.Element {
  const {size = 2, color = '#f2720c'} = props
  return (
    <div style={{color: color}}>
      <span
        style={{fontSize: `${size}rem`}}
        className="iconify"
        data-icon="flat-ui:search"
        data-inline="false"
      />
    </div>
  )
}
