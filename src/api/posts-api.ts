import axios from 'axios'
import {PostsStateType, PostType} from "../redux/posts-reducer";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
})


export const postsAPI = {
    getPosts() {
        return instance.get<Array<PostType>>('posts');
    }
}

