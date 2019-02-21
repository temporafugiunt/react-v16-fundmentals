export default function locationReducer(state = [], action) {
  if (action.type === "SET_BREEDS") {
    return action.payload;
  } else {
    return state;
  }
}
