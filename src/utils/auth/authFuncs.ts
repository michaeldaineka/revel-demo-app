import { login, loginRequest } from '../../store/slices/authSlice';
import { openAlert } from '../../store/slices/alertsSlice';

const doLogin = (values: any, dispatch: any) => {
  dispatch(loginRequest())
    .then(() => {
      dispatch(
        openAlert({
          message: "You've successfully login",
          type: 'success',
          closable: true,
          banner: true,
          showIcon: true
        })
      );
      dispatch(login());
    })
    .catch((error: any) => {
      dispatch(
        openAlert({
          message: error.code,
          description: error.message,
          type: 'error',
          closable: true,
          banner: true,
          showIcon: true
        })
      );
    });
};

export default doLogin;
