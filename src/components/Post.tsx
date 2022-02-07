import React from 'react';

type PostPropsType = {
    title: string
    body: string
}

export const Post = (props: PostPropsType) => {
    return (<div>
            <h5>{props.title}</h5>
            <p>{props.body}</p>
        </div>
    );
};
