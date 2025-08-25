import {Component} from 'react';
import DetailPost from './DetailPost.tsx';

interface Post{
    id:number;
    title:string;
    content:string;
    author:string;
}

interface State{
    post:Post[];
}

class ListPost extends Component<object,State> {
    constructor(props:object) {
        super(props);
        this.state = {
            post:[
                {
                    id:1,
                    title:"title 1",
                    content:" content1",
                    author:"tacgia1"
                },{
                    id:2,
                    title:"title 2",
                    content:" content2",
                    author:"tacgia2"
                }
            ]

        }
    }
    render() {
        return (
            <div>
                <h2>Danh sach bai viet</h2>
                {this.state.post.map((post)=>(
                    <DetailPost key={post.id} post={post} />
                ))}
            </div>
        );
    }
}

export default ListPost;