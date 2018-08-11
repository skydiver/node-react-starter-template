export const getMessage = () => {
  return (dispatch) => {
    getAjaxMessage(dispatch);
  };
};

const getAjaxMessage = (dispatch) => {
  fetch('/api/message')
    .then(response => response.json())
    .then(json => {
      dispatch({type: "GET_DEMO_MESSAGE", data: json});
    });
};