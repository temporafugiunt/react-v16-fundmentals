export default function locationReducer(state, action) {
  const newState = Object.asssign({}, state, { location: action.payload });
  return newState;
}
