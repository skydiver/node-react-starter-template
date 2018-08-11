const defaultState = {
  message: '',
};

function demo(state = defaultState, action) {
  switch (action.type) {
    case ('GET_DEMO_MESSAGE'):
      return {...state, message: action.data};
    default:
      return state;
  }
}

export default demo;