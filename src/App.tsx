import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion";
import {Rating} from "./components/Rating";

function App() {
  return (
    <div >
      <Rating value = {3}/>
      <Rating value = {4}/>
      <Accordion titleValue = {"menu"} collapsed = {true}/>
      <Accordion titleValue = {"users"} collapsed = {false}/>
    </div>
  );
}



export default App;
