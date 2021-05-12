import React, { useEffect, useState } from 'react';
import done from './svg/check.svg';
import error from './svg/error.svg';
import info from './svg/info.svg';
import warning from './svg/warning.svg';
import close from './svg/close.svg';
import Style from './styles.module.css';

type ComponentProps = {
  type: string;
  title: string;
  description: string;
  position?: string;
  duration?: number;
  closeButton?: boolean;
};

type StateProps = {
  title: string;
  description: string;
  backgroundColor: string;
  icon: string;
};

const Toast = (props: ComponentProps): JSX.Element => {
  const {
    type,
    title,
    description,
    position = 'topdown',
    duration = 2500,
    closeButton = false,
  } = props;
  const [toast, setToast] = useState<StateProps[]>([]);

  useEffect(() => {
    setToastType(type);
    // eslint-disable-next-line
  }, [type]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (toast.length) {
        closeToast(toast[0].title);
      }
    }, duration);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line
  }, [toast]);

  const setToastType = (type: string) => {
    switch (type) {
      case 'success':
        setToast([
          ...toast,
          { title, description, backgroundColor: '#666565', icon: done },
        ]);
        break;
      case 'error':
        setToast([
          ...toast,
          { title, description, backgroundColor: '#E53E3E', icon: error },
        ]);
        break;
      case 'info':
        setToast([
          ...toast,
          { title, description, backgroundColor: '#3182ce', icon: info },
        ]);
        break;
      case 'warning':
        setToast([
          {
            ...toast,
            title,
            description,
            backgroundColor: '#DD6B20',
            icon: warning,
          },
        ]);
        break;
      default:
        break;
    }
  };

  const closeToast = (title: string) => {
    const index = toast.findIndex((e) => e.title === title);
    toast.splice(index, 1);
    setToast([...toast]);
  };

  return (
    <div
      className={`${Style.toastcontainer}  ${Style[position]}`}
      style={{ animationDuration: `${duration + 500 + 'ms'}` }}
    >
      {toast.map((toast, i) => (
        <div
          key={i}
          className={`${Style.toast} ${Style.toastsupersnack}  ${Style[position]}`}
          style={{
            backgroundColor: toast.backgroundColor,
            animationDuration: `${duration + 500 + 'ms'}`,
          }}
        >
          {closeButton && (
            <img
              className={`${Style.toastclosebutton}`}
              src={close}
              alt="close-button"
              onClick={() => closeToast(toast.title)}
            />
          )}
          <div className={`${Style.toastimage}`}>
            <img src={toast.icon} alt="" />
          </div>
          <div>
            <p className={`${Style.toasttitle}`}>{toast.title}</p>
            {toast.description.length > 0 && (
              <p className={`${Style.toastdescription}`}>{toast.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Toast;
