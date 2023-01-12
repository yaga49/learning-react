import React from 'react';

type ItemsType = {
    title: string
    id: any
}

type AccordionPropsType ={
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
    items: Array<ItemsType>
    onClick: (id: any)=>void
}

type AccordionTitlePropsType ={
    value: string
    onChange: ()=>void

}

type AccordionBodyPropsType ={
    items: Array<ItemsType>
    onClick: (id: any)=>void
}
export function Accordion(props: AccordionPropsType) {

        return (
            <div >
                <AccordionTitle value={props.titleValue } onChange ={props.onChange} />
                {props.collapsed===false && <AccordionBody items={props.items} onClick={props.onClick}/>}

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

function AccordionBody(props: AccordionBodyPropsType){
    return(
        <ul>
            {props.items.map((e,index)=>{
                return (
                    <li key={index} onClick={()=>{props.onClick(e.id)}}>{e.title}</li>
                )
            })}
        </ul>
    )
}
