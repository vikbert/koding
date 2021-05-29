import {useState} from 'react'

export default function useVisibility(): {
  visible: boolean,
  show: () => void,
  hide: () => void,
} {
  const [visible, setVisible] = useState(false)

  const show = (): void => {
    setVisible(true)
  }

  const hide = (): void => {
    setVisible(false)
  }

  return {visible, show, hide}
}
