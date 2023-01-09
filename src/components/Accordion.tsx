import React from 'react';

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
}

type AccordionTitlePropsType ={
    value: string
}
export function Accordion(props: AccordionPropsType) {
    if(props.collapsed === false){
        return (
            <div>
                <AccordionTitle value={props.titleValue }/>
                <AccordionBody/>
            </div>
        )
    }
   return (
       <div>----</div>
   )
};

function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3>
            {props.value}
        </h3>
    )
}

function AccordionBody(){
    return(
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
