import React from 'react'
import {Link} from 'react-router-dom'
import IconAlert from '../../components/icons/IconAlert'

export default function HeroFooter(): JSX.Element {
  return (
    <>
      <section className="py32 ta-center fs-body3 grid ai-center jc-center sm:fd-column my32">
        <IconAlert size={4} />
        <p className="grid--cell mb0 mx24 my16">
          <strong>Beta version</strong> uses the{' '}
          <strong>Google Firebase</strong> to store all the data, please do not
          save the sensible data.
        </p>

        <Link
          to={'/teams'}
          className="grid--cell s-btn fs-body2 px32 bar-md s-btn__outlined p-ff-source-bold"
        >
          Discover Teams
        </Link>
      </section>
    </>
  )
}
