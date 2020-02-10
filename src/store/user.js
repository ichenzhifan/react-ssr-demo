const GET_USER_DETAIL = 'USER/GET_DETAIL';

const updateUserInfo = data => ({
  type: GET_USER_DETAIL,
  data
});

export const getUserInfo = () => {
  return (dispatch, getState, axios) => {
    return axios.get('/api/user/detail')
      .then(res => {
        const { data } = res.data;
        dispatch(updateUserInfo(data));
      })
  };
}

const defaultState = {};

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_DETAIL: {
      return action.data;
    }
    default: {
      return state;
    }
  }
};