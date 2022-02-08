import React from 'react';
import './App.css';
import {getPostTC, PostsStateType, delPostTC} from "./redux/posts-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./redux/store";
import {Post} from "./components/Post";
import 'antd/dist/antd.css';
import {Button} from "antd";

function App() {

    const dispatch = useDispatch()
    const store = useSelector<AppRootStateType, PostsStateType>(state => state.posts)

    const onClickHandler = () => {
        dispatch(getPostTC())
    }

    const deletePost = (id: number) => {
       // alert(id)
        dispatch(delPostTC(id))
    }

    console.log(store)

    return (
        <div className="App">
            <Button type="primary" onClick={onClickHandler}>Get posts</Button>
            <div style={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {store.posts.map(p => <Post key={p.id} title={p.title} body={p.body} id={p.id} deletePost={deletePost}/>)}
            </div>
        </div>
    );
}

export default App;
