import React from 'react';
import './App.css';
import {getPostTC, PostsStateType} from "./redux/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {Post} from "./components/Post";
import 'antd/dist/antd.css';

function App() {

    const dispatch = useDispatch()
    const store = useSelector<AppRootStateType, PostsStateType>(state => state.posts)

    const onClickHandler = () => {
        dispatch(getPostTC())
    }



   console.log(store)

    return (
        <div className="App">
            <button onClick={onClickHandler}>Get posts</button>
            <div>
               { store.posts.map( p => <Post key={p.id} title={p.title} body={p.body} />) }
            </div>
        </div>
    );
}

export default App;
