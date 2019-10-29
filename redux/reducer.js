import { actionTypes } from "./actionTypes";

export const exampleInitialState = {
  count: 0,
  error: false,
  lastUpdate: 0,
  light: false,
  placeholderData: null,
  article: null,
  articles: [],
  collect: null,
  collects: []
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      };

    case actionTypes.INCREMENT:
      return {
        ...state,
        ...{ count: state.count + 1 }
      };

    case actionTypes.DECREMENT:
      return {
        ...state,
        ...{ count: state.count - 1 }
      };

    case actionTypes.RESET:
      return {
        ...state,
        ...{ count: exampleInitialState.count }
      };

    case actionTypes.LOAD_DATA_SUCCESS:
      return {
        ...state,
        ...{ placeholderData: action.data }
      };

    case actionTypes.TICK_CLOCK:
      return {
        ...state,
        ...{ lastUpdate: action.ts, light: !!action.light }
      };

    case actionTypes.GET_ARTICLE_BY_ID:
      return {
        ...state,
        ...{ article: action.payload }
      };

    case actionTypes.GET_ALL_ARTICLES:
      return {
        ...state,
        ...{ articles: action.payload }
      };
    case actionTypes.CREATE_NEW_COLLECT:
      return {
        ...state,
        ...{ collect: action.payload }
      };
    case actionTypes.GET_ALL_COLLECTS:
      return {
        ...state,
        ...{ collects: action.payload }
      };

    default:
      return state;
  }
}

export default reducer;
