import {Dispatch} from 'redux'
import {postsAPI} from "../api/posts-api";

const initialState: PostsStateType = {
    posts: [
        // {
        //     "userId": 1,
        //     "id": 1,
        //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        // },
        // {
        //     "userId": 1,
        //     "id": 2,
        //     "title": "qui est esse",
        //     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        // },
    ]
}

export const postsReducer = (state: PostsStateType = initialState, action: ActionsType):  PostsStateType => {
    switch (action.type) {
        case 'GET-POSTS':
            return {...state, posts: action.payload}
        case 'DEL-POSTS':
            return {...state, posts: [...state.posts.filter(el => el.id !== action.payload)]}
        default:
            return {...state}
    }
}


export type  PostsStateType = {
    posts: Array<PostType>
}

export type PostType = {
    userId: number
    id: number
    title: string
    body: string
}

export const getPostsAC = (payload: Array<PostType>) => ({type: 'GET-POSTS', payload} as const)
export const delPostsAC = (payload: number) => ({type: 'DEL-POSTS', payload} as const)


export const getPostTC = () => (dispatch: Dispatch) => {
    postsAPI.getPosts().then((res)=>dispatch(getPostsAC(res.data)))
}
export const delPostTC = (id: number) => (dispatch: Dispatch) => {
    dispatch(delPostsAC(id))
}

export type GetPostsActionType = ReturnType<typeof getPostsAC>
export type DelPostsActionType = ReturnType<typeof delPostsAC>

type ActionsType =
    | GetPostsActionType
    | DelPostsActionType
