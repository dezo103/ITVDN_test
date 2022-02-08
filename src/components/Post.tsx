import React from 'react';
import {Button, Card} from "antd";

type PostPropsType = {
    title: string
    body: string
    id: number
    deletePost: (id: number) => void
}


export const Post = (props: PostPropsType) => {

    const deletePost = () => {
        props.deletePost(props.id)
    }

    return (<Card style={{ width: 300 }}>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <Button type="dashed" onClick={deletePost}>del</Button>
        </Card>
    );
};
