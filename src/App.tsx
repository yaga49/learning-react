import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UnControllerAccordion} from "./components/unControllerAccordion/UnControllerAccordion";
import {UnControlledRating} from "./components/UncontrolledRating/UnControlledRating";

function App() {

    let [ratingValue, setRatingValue] = useState(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOnOff, setSwitchOnOff] = useState<boolean>(false)

    return (
        <div className={"App"}>

            {/*<Rating value = {3}/>*/}
            {/*<Rating value = {ratingValue} onClick={setRatingValue}/>*/}
            {/*  <UnControlledRating/>*/}
            {/*  <UnControlledRating/>*/}
            <Accordion titleValue={"menu"} collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>
            {/*<Accordion titleValue = {"users"} collapsed = {true}/>*/}
            {/*<UncuntrolledOnOff />*/}
            {/*  <UnControllerAccordion titleValue={"users"}/>*/}
            {/*  <UnControllerAccordion titleValue={"menu"}/>*/}
            <OnOff switchOnOff={switchOnOff} onChange={(switchOnOff)=>{setSwitchOnOff(switchOnOff)}}/>
        </div>
    );
}


export default App;
