/////////////////ACTIONS///////////////////

const IS_READY = "IS_READY";
const CYCLE1 = "CYCLE1";
const CYCLE2 = "CYCLE2";
const CYCLE3 = "CYCLE3";
const CYCLE4 = "CYCLE4";
const BURGER = "BURGER";


export const cycleTo1 = () => ({type: CYCLE1});
export const cycleTo2 = () => ({type: CYCLE2});
export const cycleTo3 = () => ({type: CYCLE3});
export const cycleTo4 = () => ({type: CYCLE4});
export const burger = () => ({type: BURGER});


/////////////////REDUCER///////////////////
let initialState = {
  isReady: true,
  num: 1,
  name: ""
};
export default (state = initialState, action) => {
  switch (action.type) {
    case IS_READY:
      return Object.assign({}, state, {isReady: !state.isReady});
      break;
    case CYCLE1:
      return Object.assign({}, state, {num: 1});
      break;
    case CYCLE2:
      return Object.assign({}, state, {num: 2});
      break;
    case CYCLE3:
      return Object.assign({}, state, {num: 3});
      break;
    case CYCLE4:
      return Object.assign({}, state, {num: 4});
      break;
    case BURGER:
      let name;
      state.name.length ? name = "" : name = "is-active";
      return Object.assign({}, state, {name});
      break;
    default:
      return state;
  }
}
