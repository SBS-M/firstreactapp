import React, { Component } from 'react';
import './App.css';
import tasks from '../src/sample/task.json';

console.log("tasks ", tasks);

class App extends Component {

  state = {
    tasks: tasks
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((e) =>
          <p>
            {e.id} - {e.title} - {e.descripcion}
          </p>)}
      </div>
    )
  }
}

export default App;










/* function Helloworld (props) {
  console.log(props);
  return (
    <div id="hello">
    <h3>{props.subtitle}</h3>
    {props.pruebaText}
    </div>
  );
} */

/* const App = () => <div>This is my component const -> <Helloworld/> </div> */

/* class App extends React.Component{
  render(){
    return <div>This is my component class: <Helloworld/></div>
  }
} */

/* class Helloworld extends React.Component {

  state = {
    show: false
  }

  render(){
    if(this.state.show){
      return (
        <div id="hello">
        <h3>{this.props.subtitle}</h3>
        {this.props.pruebaText}
        <button onClick={() => alert('welcome')}>Toggle show</button>
        </div>
      );
    }else{
      return <h1>No hay elementos</h1>
    }
  }
}

class Helloworld extends React.Component {

  state = {
    show: true
  }

  toggleShow = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    console.log("this.state.show ", this.state.show);

    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.pruebaText}
          <button onClick={this.toggleShow}>Toogle Show</button>
        </div>
      )
    } else {
      return (
        <div>
          <h1>No hay elementos.</h1>
          <button onClick={this.toggleShow}>Toggle revert</button>

        </div>)


    }

  }
}

function App() {
  return (
    <div>This is my component function:
      <Helloworld subtitle="Titulo SuperGG" pruebaText="Prueba 1" />
      <Helloworld pruebaText="Prueba 2" />
      <Helloworld pruebaText="Prueba 3" /></div>
  );
} */