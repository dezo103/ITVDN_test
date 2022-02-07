//import {authAPI} from "../api/todolists-api";
import {Dispatch} from 'redux'

const initialState: PostsStateType = {
    posts: []
}

export const postsReducer = (state: PostsStateType = initialState, action: ActionsType):  PostsStateType => {
    switch (action.type) {
        case 'GET-POSTS':
            return {...state, posts: [1,3,5,7]}
        default:
            return {...state}
    }
}


export type  PostsStateType = {
    posts: Array<number>
}

export const getPostsAC = () => ({type: 'GET-POSTS'} as const)
export const getPostTC = () => (dispatch: Dispatch) => {
    dispatch(getPostsAC())
}

export type GetPostsActionType = ReturnType<typeof getPostsAC>

type ActionsType =
    | GetPostsActionType
