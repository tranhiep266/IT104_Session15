import React from 'react';

interface Post{
    id:number;
    title:string;
    content:string;
    author:string;
}

interface Props{
    post:Post;
}

const DetailPost: React.FC<Props> = ({ post }) => {
    return (
        <div>
            <p>Id: {post.id}</p>
            <p>title:{post.title}</p>
            <p>content: {post.content}đ</p>
            <p>author: {post.author}</p>
        </div>
    );
};


export default DetailPost;