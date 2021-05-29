import {useEffect} from 'react'

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    window.document.title = title || 'Rate Code'
  }, [])
}
