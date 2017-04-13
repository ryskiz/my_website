/////////////////ACTIONS///////////////////

const IS_READY = "IS_READY";



/////////////////REDUCER///////////////////
let initialState = {
  isReady: true
};
export default (state = initialState, action) => {
  switch (action.type){
    case IS_READY:
      return Object.assign({}, state, {isReady: !state.isReady})
    break;
    default:
      return state;
  }
}




//////////////ACTION DISPATCHERS///////////




