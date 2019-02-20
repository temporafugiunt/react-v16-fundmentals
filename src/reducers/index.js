//import { combineReducers } from "redux";
import location from "./location";

// standard root reducer
const rootReducer = function(state, action) {
  switch (action.type) {
    case "SET_LOCATION":
      return location(state, action);
  }
};

// export default combineReducers({
//   location,
// });
