import React, { Component } from 'react';
import classnames from 'classnames';

class TodoTextInput extends Component {
    state ={
        text:this.props.text || ''
    }
    onChange(e){
        this.setState({ text: e.target.value })
        console.log(e.target.value)
    }
    handleSubmit(e){
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
              this.setState({ text: '' })
            }
          }
          console.log(text)
    }
    render() {
        return (    
            <input className={
                classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })} type="text" placeholder={this.props.placeholder}
                autoFocus={true}
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={e=>this.onChange(e)}
                onKeyDown={e=>this.handleSubmit(e)}
            />         
        );
    }
}

export default TodoTextInput;