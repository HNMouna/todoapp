import { TOGGLE_FILTER } from "../actions/todoTypes";

const filterReducer = (state = "all",action) => {
  switch (action.type) {
    case TOGGLE_FILTER:
      return action.playload
      

    default:
     return state;
  }
}
export default filterReducer
