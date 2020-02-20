import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';

class Posts extends Component{
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
        this.props.history.push({pathname:'/fullpost/' +id });
    }

    render(){
        const posts = this.state.posts.map(x => {
            return( 
            //<Link to = {"/fullpost/" + x.id} key = {x.id}> 
                <Post  title = {x.title} author = {x.author} clicked = {() => this.onSelectedhandler(x.id)}/>
              //  </Link>
              )
        })
        return(

        <section className="Posts">
                    {posts}
        </section>
        )    
}
}
export default Posts;