import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deletePost} from '../action/postActions'

class Post extends Component {  
    handleClick = (e) => {
        this.props.deletePost(this.props.post.id )
        this.props.history.push('/')
    }  
    render() {
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
                <h4 className = "center">
                    {this.props.post.title}
                </h4>
                <p>{this.props.post.body}</p>
                <div className="center" onClick = {this.handleClick}>
                    <button className="btn grey">
                        Delete Post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">
                    Loading post
            </div>
            )
        return (
            <div className="container">
                <h4>{post}</h4>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post : state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost : (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Post)