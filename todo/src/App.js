import React from "react";
import Header from "./components/Header";
import Todoitems from "./components/Todoitems";
import Button from "./components/Button";
import './style.css';
import CounterComponent from "./components/countercomponent";
// import Timer from "./timer";

const App = () => {
  return (
    <div classname="todo-container">
      <CounterComponent />
      <Header title="Todo app" />
      <Todoitems completed={true} text="eat" />
      <Todoitems text="code"/>
      <Todoitems text="play"/>
      <Todoitems text="study"/>
      <Button /> 
    </div>
  );
};

export default App;
