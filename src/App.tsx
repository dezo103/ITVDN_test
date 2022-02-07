import React from 'react';
import './App.css';
import {getPostTC, PostsStateType} from "./redux/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";

function App() {

    const dispatch = useDispatch()
    const store = useSelector<AppRootStateType, PostsStateType>(state => state.posts)

    const onClickHandler = () => {
        dispatch(getPostTC())
    }

    return (
        <div className="App">
            <button onClick={onClickHandler}>Get posts</button>
            <div>
               { store.posts.map( p => <li>{p}</li>) }
            </div>
        </div>
    );
}

export default App;
