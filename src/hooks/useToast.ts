import {useState} from "react";

export interface Config {
  type: string,
  title: string,
  description?: string,
}

interface ToastUtilities {
  visible: boolean,
  config: Config,
  notify: any,
}


const useToast = (initConfig: Config): ToastUtilities => {
  const [visible, setVisible] = useState<boolean>(false);
  const [config, setConfig] = useState<Config>(initConfig)

  const notify = (newConfig: Config) => {
    if (null !== newConfig) {
      setConfig(newConfig);
    }
    setVisible(true);
  }

  return {visible, config, notify};
}

export default useToast;
