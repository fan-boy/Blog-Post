import React, { Component } from 'react';
import Posts from '../Posts/posts';
import {Route , Link} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

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
                            <li ><Link to ="/">  Home</Link></li>
                            <li><Link to = '/newPost'>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                    <Route path ="/" component = {Posts} exact />
                    <Route path ="/newPost" component = {NewPost} exact />
                    <Route path = "/fullPost" component = {FullPost} exact />
                    
            </div>
        );
    }
}

export default Blog;