import React, { Component } from 'react';
import './App.css';
import Persons from '../components/persons/persons'
import MyHeader from '../components/Header/Header';

class App extends Component {
  // state:用于改变组件内容状态的值（动态的）
  // props:用于组件通信进行传值

  state = {
    persons: [
      { id: 1, name: "Xiaoming", count: 30 },
      { id: 2, name: "Xiaoling", count: 20 },
      { id: 3, name: "Xiaohing", count: 230 },
      { id: 4, name: "Xiaohing", count: 230 },
      { id: 5, name: "Xiaohing", count: 230 },
      { id: 6, name: "Xiaohing", count: 230 },
      { id: 7, name: "Xiaohing", count: 230 },
      { id: 8, name: "Xiaohing", count: 230 },
    ],
    // count:0,
    otherState: "anything",
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //Don't DO THIS:
    //  this.state.persons[0].name="message";
    //更改状态值
    this.setState({
      persons: [
        { name: newName, count: 30 },
        { name: "Xiaoging", count: 3330 },
        { name: "Xiaohing", count: 230 },
        { name: "Xiaohing", count: 230 },
        { name: "Xiaohing", count: 230 },
        { name: "Xiaohing", count: 230 },
        { name: "Xiaohing", count: 230 },
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    //查找更改到哪个对象
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person={
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] =person;
    //更改状态值
    this.setState({
      persons: persons
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    //展开运算符
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    })
  }

  onClickButton = ()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }

  render() { 
    let persons = null;
    if (this.state.showPersons) {
      persons = <Persons 
                 persons={this.state.persons}
                 clicked={this.deletePersonHandler}
                 changed={this.nameChangeHandler}
                 />
      // (
      //   <div>
      //     {
      //       this.state.persons.map((person, index) => {
      //         return <Person
      //           changed={(event) => this.nameChangeHandler(event, person.id)}
      //           myclick={() => this.deletePersonHandler(index)}
      //           key={person.id}
      //           name={person.name}
      //           count={person.count} />
      //       })
      //     }
      //   </div>
      // )
      //点击按钮后样式更改
      // style.backgroundColor="red";
    }
   
    // JSX语法
    return (
      <div className="App">
        {/* <h1>Hello world</h1> */}
        {/* <button onClick={this.onClickButton}>点击</button>
        <div>
          Click Count:{this.state.count}
        </div>  */}
        {/* <p className={classes.join(" ")}>Hi,欢迎关注</p> */}
        {/* <button onClick={() => this.switchNameHandler("米修")}>更改状态值</button> */}
        {/* <button style={style} onClick={this.switchNameHandler.bind(this, "米修")}>更改状态值</button>*/}
        {/* <button style={style} onClick={this.togglePersonsHandler}>内容切换</button> */}
        <MyHeader
          persons = {this.state.persons}
          showPersons={this.state.showPersons}
          clicked = {this.togglePersonsHandler}
        />
       {persons}

        {/* {this.state.showPersons ?
          <div>
            <Person
              changed={this.nameChangeHandler}
              name={this.state.persons[0].name}
              count={this.state.persons[0].count}
            />
            <Person
              myclick={this.switchNameHandler.bind(this, "mixiumsu")}
              name={this.state.persons[1].name}
              count={this.state.persons[1].count}
            />
            <Person name={this.state.persons[2].name} count={this.state.persons[2].count}>
              react-basic</Person>
          </div> : null
        } */}
      </div>
    );
  }

  //传统的react标签语法(很麻烦)
  // return React.createElement('div',{className:'App'},React
  // .createElement('h1',null,'Hello world'));
}
//公开给外部,是其他文件可以引入app
export default App;
