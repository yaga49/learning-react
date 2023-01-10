import React from 'react';

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
    onChange: ()=>void

}

type AccordionTitlePropsType ={
    value: string
    onChange: ()=>void
}
export function Accordion(props: AccordionPropsType) {

        return (
            <div >
                <AccordionTitle value={props.titleValue } onChange ={props.onChange}/>
                {props.collapsed===false && <AccordionBody/>}

            </div>
        )

};

function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3 onClick={props.onChange}>
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
