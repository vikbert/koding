import React from 'react'

type PropsT = {
  children: any
}

export default function ActionContainer(props: PropsT): JSX.Element {
  return (
    <div className="grid--cell mr16 fl1 w96">
      <div className="grid d-flex gs8 s-anchors s-anchors__muted fw-wrap">
        {props.children.map((item: any, index: number) => (
          <div className="grid--cell" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="js-menu-popup-container" />
    </div>
  )
}
