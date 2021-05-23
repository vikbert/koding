export const ERROR_SET = 'error_set';
export const ERROR_UNSET = 'error_unset';

export const setError = (message: string) => ({
  type: ERROR_SET,
  message,
});

export const unsetError = () => ({
  type: ERROR_UNSET,
});

type StateErrorType = {
  hasError: boolean;
  message: string;
};
export const stateError = {hasError: false, message: ''};

export const errorReducer = (
  state: StateErrorType = stateError,
  action: any,
) => {
  switch (action.type) {
    case ERROR_SET:
      return {hasError: true, message: action.message};
    case ERROR_UNSET:
      return {hasError: false, message: ''};
    default:
      return state;
  }
};
