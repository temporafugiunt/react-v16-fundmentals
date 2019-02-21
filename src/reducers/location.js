export default function locationReducer(state = "Rockford, IL", action) {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  } else {
    return state;
  }
}
