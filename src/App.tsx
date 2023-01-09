import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControllerAccordion} from "./components/unControllerAccordion/UnControllerAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UnControlledRating";

function App() {
  return (
    <div className={"App"}>
      {/*<Rating value = {3}/>*/}
      {/*<Rating value = {4}/>*/}
        <UnControlledRating/>
        <UnControlledRating/>
      {/*<Accordion titleValue = {"menu"} collapsed = {false}/>*/}
      {/*<Accordion titleValue = {"users"} collapsed = {true}/>*/}
      <OnOff />
        <UnControllerAccordion titleValue={"users"}/>
        <UnControllerAccordion titleValue={"menu"}/>
    </div>
  );
}



export default App;
