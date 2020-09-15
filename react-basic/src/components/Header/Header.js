import React from 'react';
import './Header.css';

const MyHeader = (props) => {
     //动态添加类名
     const classes=[];

     const style = {
        backgroundColor: 'green',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      }

      if(props.showPersons){
         style.backgroundColor="red"
      }

     if(props.persons.length<=5){
        classes.push("red");
     }

     if(props.persons.length>=5){
       classes.push("bold");
     }

    return (
        <div>
            <h1>Hello world</h1>
            <p className={classes.join(" ")}>Hi,欢迎关注</p>
            {/* <button onClick={() => this.switchNameHandler("米修")}>更改状态值</button> */}
            {/* <button style={style} onClick={this.switchNameHandler.bind(this, "米修")}>更改状态值</button> */}
            <button style={style} onClick={props.clicked}>内容切换</button>       
        </div>
    );
}

export default MyHeader;
