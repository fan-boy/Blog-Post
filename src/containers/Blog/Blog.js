import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
        posts :[],
        selectedPostId : null
    }

    componentDidMount (){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(
            response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(t =>{
                    return{
                        ...t,
                        author:'Max'
                    }
                });
                this.setState({posts:updatedPosts});
                console.log(response);
            }
        );
    }
    onSelectedhandler = (id) =>{
        this.setState({selectedPostId:id});

    }
    render () {
        const posts = this.state.posts.map(x => {
            return <Post key = {x.id} title = {x.title} author = {x.author} clicked = {() => this.onSelectedhandler(x.id)}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id = {this.state.selectedPostId} posts = {this.state.posts} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;