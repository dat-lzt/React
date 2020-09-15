import React, { Component,Fragment } from 'react'

 class Todolist extends Component {
     constructor(props){
        super(props);
        this.state = {
            inputValue:'nihao',
            list:['sss','ssssss']
        }
     }
     inputChange(e){
        //  this.state.inputValue = e.target.value;
         this.setState({
             inputValue:e.target.value,
         })
    }
    addlist(){
        this.setState({
            list:[
                ...this.state.list,this.state.inputValue
            ]
        })
        this.state.inputValue=''
    }
    deleteItem(index){
        const list = this.state.list;
        list.splice(index,1)
        this.setState({
            list:list
        })
    }
    render() {
        return (
            <Fragment>
            <div>
            <input type="text" 
            value={this.state.inputValue}
            onChange={e=>{this.inputChange(e)}}
            />
            <button onClick={()=>{this.addlist()}}>增加</button></div>
            <ul>
                {
                    this.state.list.map((item,index)=>{
                    return <li key={index+item}
                    onClick={()=>{this.deleteItem(index)}}>{item}</li>
                    })
                }
            </ul>
            </Fragment>
        )
    }
}
export default Todolist