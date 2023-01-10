import React, {useState} from 'react';

type AccordionPropsType ={
    titleValue: string
    // collapsed: boolean
}

type AccordionTitlePropsType ={
    value: string
    onClick: ()=>void
}
export function UnControllerAccordion(props: AccordionPropsType) {

    let [collapsed, setCollapsed] = useState(false)



        return (
            <div>
                <AccordionTitle value={props.titleValue } onClick = {()=>{setCollapsed(!collapsed)}}/>

                {collapsed===false && <AccordionBody/>}

            </div>
        )

};

function AccordionTitle(props: AccordionTitlePropsType){
    return(
        <h3 onClick={props.onClick}>
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
