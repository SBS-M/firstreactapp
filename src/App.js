import React from 'react';
/* import logo from './logo.svg'; */
import './App.css';

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

class Helloworld extends React.Component {

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

function App() {
  return (
    <div>This is my component function: 
      <Helloworld subtitle="Titulo SuperGG" pruebaText="Prueba 1"/> 
      <Helloworld pruebaText="Prueba 2" /> 
      <Helloworld pruebaText="Prueba 3"/></div>
  );
}

export default App;
