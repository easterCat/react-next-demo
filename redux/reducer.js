import { actionTypes } from './actionTypes';

export const exampleInitialState = {
    article: null,
    articles: [],
    collect: null,
    collects: [],
    user: null,
    comment: null,
    comments: [],
};

function reducer(state = exampleInitialState, action) {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                ...{ user: action.payload },
            };

        case actionTypes.LOGGED:
            return {
                ...state,
                ...{ user: null },
            };

        case actionTypes.GET_ARTICLE_BY_ID:
            return {
                ...state,
                ...{ article: action.payload },
            };

        case actionTypes.GET_ALL_ARTICLES:
            return {
                ...state,
                ...{ articles: action.payload },
            };

        case actionTypes.GET_ARTICLE_BY_COLLECT_ID:
            return {
                ...state,
                ...{ articles: action.payload },
            };

        case actionTypes.CREATE_NEW_COLLECT:
            return {
                ...state,
                ...{ collect: action.payload },
            };

        case actionTypes.GET_ALL_COLLECTS:
            return {
                ...state,
                ...{ collects: action.payload },
            };

        case actionTypes.UPDATE_ARTICLE:
            return Object.assign(
                {},
                { ...state },
                {
                    article: action.payload,
                },
            );

        case actionTypes.CREATE_COMMENT:
            return Object.assign(
                {},
                { ...state },
                {
                    comment: action.payload,
                },
            );

        case actionTypes.GET_COMMENTS:
            return Object.assign(
                {},
                { ...state },
                {
                    comments: action.payload,
                },
            );

        case actionTypes.REGISTER:
            return Object.assign({}, { ...state }, { user: action.payload });

        default:
            return state;
    }
}

export default reducer;
