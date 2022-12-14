import { GLOBALTYPES } from './globalTypes';
import { postDataAPI } from '../../utils/fetchData';
import valid from '../../utils/valid';

export const login = (data: any) => async (dispatch: any) => {
  dispatch({
    type: GLOBALTYPES.AUTH,
    payload: {},
  });
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI('login', data);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    localStorage.setItem('firstLogin', 'true');

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err,
        },
      });
    }
  }
};

export const refreshToken = () => async (dispatch: any) => {
  const firstLogin = localStorage.getItem('firstLogin');
  if (firstLogin) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    try {
      const res = await postDataAPI('refresh_token', '');
      dispatch({
        type: GLOBALTYPES.AUTH,
        payload: {
          token: res.data.access_token,
          user: res.data.user,
        },
      });
      dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: GLOBALTYPES.ALERT,
          payload: {
            error: err,
          },
        });
      }
    }
  }
};

export const register = (data: any) => async (dispatch: any) => {
  const check = valid(data);
  if (check.errLength > 0) {
    dispatch({ type: GLOBALTYPES.ALERT, payload: check.errMsg });
  } else {
    dispatch({ type: GLOBALTYPES.ALERT, payload: {} });
  }
  try {
    dispatch({ type: GLOBALTYPES.ALERT, payload: { loading: true } });
    const res = await postDataAPI('register', data);
    dispatch({
      type: GLOBALTYPES.AUTH,
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    localStorage.setItem('firstLogin', 'true');

    dispatch({
      type: GLOBALTYPES.ALERT,
      payload: {
        success: res.data.msg,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      dispatch({
        type: GLOBALTYPES.ALERT,
        payload: {
          error: err,
        },
      });
    }
  }
};
