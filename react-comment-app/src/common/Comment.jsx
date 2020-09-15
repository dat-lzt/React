import React, { Component } from 'react';
import '../style/Comment.css'
import { PropTypes } from 'prop-types';
class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }

    constructor() {
        super()
        this.state = { timeString: '' }
    }

    componentWillMount() {
        this._updateTimeString()
        //增加一个定时器，每隔5秒调用一次，自动更新时间
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    _updateTimeString() {
        const comment = this.props.comment
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }
    handleDeleteComment() {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }
    //增加代码快格式的判断
    // _getProcessedContent(content) {
    //     return content
    //         .replace(/&/g, "&amp;")
    //         .replace(/</g, "&lt;")
    //         .replace(/>/g, "&gt;")
    //         .replace(/"/g, "&quot;")
    //         .replace(/'/g, "&#039;")
    //         .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    // }
    componentWillUnmount () {
        clearInterval(this._timer)
      }
    render() {
        return (
            <div className="comment">
                <div className="comment-user">
                    <span>{this.props.comment.username} :</span>
                </div>
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }} />
                <span className="comment-createtime">{
                    this.state.timeString}</span>
                <span className='comment-delete'
                    onClick={() => this.handleDeleteComment()}>
                    删除
                </span>
            </div>
        );
    }
}

export default Comment;