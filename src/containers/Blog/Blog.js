import React, { Component } from 'react';
import Posts from '../Posts/posts';
import {Route , NavLink , Switch} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
//import NewPost from '../NewPost/NewPost';
import './Blog.css';
import AsyncLoader from '../../hoc/asyncLoader';

const asyncNewPost = AsyncLoader(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {
    state = {
        posts :[],
        selectedPostId : null
    }

    
    
    render () {
        
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li ><NavLink to ="/" exact>  Home</NavLink></li>
                            <li><NavLink to = '/newPost'>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path ="/" component = {Posts} exact />
                    <Route path ="/newPost" component = {asyncNewPost} exact />
                    <Route path = "/fullPost/:id" component = {FullPost} exact />
                </Switch>
                    
            </div>
        );
    }
}

export default Blog;