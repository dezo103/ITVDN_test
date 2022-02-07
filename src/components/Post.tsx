import React from 'react';
import {Card} from "antd";

type PostPropsType = {
    title: string
    body: string
}

export const Post = (props: PostPropsType) => {
    return (<Card>
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </Card>
    );
};
