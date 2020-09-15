import React, { Component } from 'react';
import '../style/CommentInput.css';

class CommentInput extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            content: ''
        }

    }
    handleUsernameChange(e) {
        this.setState
            ({username: e.target.value})
    }
    handleContentChange(e) {
        this.setState
            ({content: e.target.value})
    }
    handleSubmit(e){
        if(this.props.onSubmit){
            // const {username,content} = this.state;
            this.props.onSubmit({
                username:this.state.username,
                content:this.state.content,
                createdTime:+new Date()
            })
        }
        this.setState({content:''})
    }
    //评论区自动聚焦
    componentDidMount(){
      this.textarea.focus();
    }
    _saveUsername (username) {
        localStorage.setItem('username', username)
      }
    handleUsernameBlur(e){
      this._saveUsername(e.target.value);
    }
    componentWillMount () {
        this._loadUsername()
      } 
      _loadUsername () {
        const username = localStorage.getItem('username')
        if (username) {
          this.setState({ username })
        }
      }
    render() {
        return (
            <div className="comment-input">
                <div className="comment-field">
                    <span className="comment-field-name">
                        用户名:
                    </span>
                    <div className="comment-field-input">
                        <input
                            value={this.state.username}
                            onBlur={e=>this.handleUsernameBlur(e)}
                            onChange={e => this.handleUsernameChange(e)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容:</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea)=>this.textarea=textarea}
                            value={this.state.content}
                            onChange={e => this.handleContentChange(e)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={()=>this.handleSubmit()}>发布</button>
                </div>
            </div>
        );
    }
}

export default CommentInput;