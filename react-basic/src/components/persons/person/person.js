import React from 'react';
import './person.css'


const Person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.myclick}>大家好，欢迎光临! {props.name}已经拥有{props.count}个作品</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    );
}

export default Person;