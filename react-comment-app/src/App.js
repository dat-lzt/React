import React, { Component } from 'react';
import './App.css';
import CommentInput from './common/CommentInput';
import CommentList from './common/CommentList';

class App extends Component {
  constructor(props){
     super(props)
     this.state={
       comments:[]
     }
  }
  componentWillMount () {
    this._loadComments()
  }

  _loadComments () {
    let comments = localStorage.getItem('comments')
    if (comments) {
      comments = JSON.parse(comments)
      this.setState({ comments })
    }
  }
  _saveComments(comments){
    localStorage.setItem('comments',JSON.stringify(comments))
  }
  handleSubmit(e){
  //  console.log(e);
  if (!e) return;
  if(!e.username) return alert('请输入用户名');
  if(!e.content) return alert('请输入评论内容');
  // this.state.comments.push(e);
  // this.setState({
  //   comments:this.state.comments,
  // })
  const comments= this.state.comments;
  comments.push(e)
  this.setState({
      comments
    })
  this._saveComments(comments)
  }

  handleDeleteComment(index){
       console.log(index);
       const comments = this.state.comments;
       comments.splice(index,1)
       this.setState
       ({comments})
       this._saveComments(comments)
  }
  render(){
    return (
      <div className="App">
        <h1>评论</h1>
        <CommentInput onSubmit={e=>this.handleSubmit(e)}/>
        <CommentList 
        comments={this.state.comments}
        onDeleteComment={this.handleDeleteComment.bind(this)}/>
      </div>
    );
  }
  
}

export default App;
