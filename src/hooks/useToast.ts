import nativeToast, { ToastOptions } from 'native-toast';

const useNotify = () => {
  const notify = (options: ToastOptions) => {
    nativeToast({
      type: options.type,
      message: options.message,
      position: 'north',
      timeout: 3000,
      edge: true,
    });
  };

  return notify;
};

export default useNotify;
