import { FETCH_VIDEOS } from "../actions/types";
const initialState = {
  videos: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_VIDEOS:
      return {
        ...state,
        videos: action.payload
      };
    default:
      return state;
  }
}
// import { FETCH_WEATHER } from "../actions/types";

// export default function (state = [], action) {
//   switch (action.type) {
//     case FETCH_WEATHER:
//       return [action.payload.data, ...state];
//   }
//   return state;
// }
