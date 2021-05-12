import { useState } from 'react';

export default function useVisibility(): {
  visible: boolean;
  show: () => void;
} {
  const [visible, setVisible] = useState(false);

  const show = (): void => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2500);
  };

  return { visible, show };
}
