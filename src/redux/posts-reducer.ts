import {Dispatch} from 'redux'

const initialState: PostsStateType = {
    posts: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
    ]
}

export const postsReducer = (state: PostsStateType = initialState, action: ActionsType):  PostsStateType => {
    switch (action.type) {
        case 'GET-POSTS':
            return {...state, posts: [...state.posts, {
                    "userId": 555,
                    "id": 233,
                    "title": " esse",
                    "body": "ebitis possimus qui neque nisi nulla"
                }]}
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

export const getPostsAC = () => ({type: 'GET-POSTS'} as const)
export const getPostTC = () => (dispatch: Dispatch) => {
    dispatch(getPostsAC())
}

export type GetPostsActionType = ReturnType<typeof getPostsAC>

type ActionsType =
    | GetPostsActionType
