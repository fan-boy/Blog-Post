import React, { Component } from 'react';

import './FullPost.css';
import Axios from 'axios';

class FullPost extends Component {
    state ={
        loadedPost: null
    }
    componentDidMount(){
        if(this.props.match.params.id){
            if(!this.state.loadedPost ||(this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)){
            Axios.get('https://jsonplaceholder.typicode.com/posts/' + this.props.match.params.id)
            .then(response =>{
                this.setState({loadedPost : response.data});
            });
        }
        }
    }
    
    render () {
        console.log(this.props);
        let post = <div className = "FullPost"><p>Please select a Post!</p></div>;
        if(this.props.match.params.id){
            post = <div className = "FullPost"><p>....Loading</p></div>
        }
        if(this.state.loadedPost){
        post = (
            <div className="FullPost">
        <h1>{this.state.loadedPost.title}</h1>
        <p>{this.state.loadedPost.body}</p>
                <div className="Edit">
                    <button className="Delete">Delete</button>
                </div>
            </div>

        );
        }
        return post;
    }
}

export default FullPost;