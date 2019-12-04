import { actionTypes } from "./actionTypes";

export const exampleInitialState = {
  article: null,
  articles: [],
  collect: null,
  collects: [],
  user: null
};

function reducer(state = exampleInitialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        ...{ user: action.payload }
      };

    case actionTypes.LOGGED:
      return {
        ...state,
        ...{ user: action.payload }
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

    case actionTypes.UPDATE_ARTICLE:
      return Object.assign(
        {},
        { ...state },
        {
          article: action.payload
        }
      );

    default:
      return state;
  }
}

export default reducer;
