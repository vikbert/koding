import {useEffect} from 'react';

export default function useKeypress(key: string, action: () => void) {
  useEffect(() => {
    function onKeyup(event: any) {
      if (event.key === key) {
        action();
      }
    }

    window.addEventListener('keyup', onKeyup);

    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}
